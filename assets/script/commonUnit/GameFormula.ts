import Misc from "./Misc";
import BaseComponent from "../scene/base/BaseComponent";
/**
 * author:陈晓亮
 * date: 2019/03/04
 * desc：公式计算
 */

 // 运算符类型
enum OperatorType {
  ADD = 1,    // +
  SUB = 2,    // -
  MUL = 3,    // *
  DIV = 4,    // /
  MOD = 5,    // %
  POW = 6,    // ^
  FACT = 7,   // !
  LEFT = 8,   // (
 }

 // 运算符优先级
enum OperatorLV {
  ADDLEVEL = 1,
  SUBLEVEL = 1,
  MULLEVEL = 2,
  DIVLEVEL = 2,
  MODLEVEL = 2,
  POWLEVEL = 3,
  FACTLEVEL = 4,
  LEFTLEVEL = 5,
 }

class StackFormula {
  constructor() {
    this.num = null;
    this.opsign = null;
    this.bracket = null;
  }

  // 数字
  public num: number;
  
  // 运算符
  public opsign: number;

  // 所处括号层
  public bracket: number;
 }

export default class GameFormula extends BaseComponent {
  public static get INSTANCE(): GameFormula {
    if (GameFormula.singleInstance === null) {
      this.singleInstance = new GameFormula();
    }
    return GameFormula.singleInstance;
  }
  private static singleInstance: GameFormula = null;

  // 计算的表达式
  private mStrFormula: string;				

  // 长度
  private mNumFormulaLen: number;				
  
  // 表达式指针
  private mNumPointPos: number;					
  
  // 堆栈数目
  private mNumStackNum: number;					
  
  // 当前层次深度
  private mNumBracket: number;						
  
  private mArrStackForFormula: StackFormula[];

  private mNumResult: number;
  
  public calcFormula(strFotmula: string) {
    if (!strFotmula) {
      return 0;
    }
    
    this.mStrFormula = strFotmula;
    this.mNumFormulaLen = this.mStrFormula.length;
    this.mNumPointPos = 0;
    this.mNumStackNum = 0;
    this.mNumBracket = 0;
    this.mArrStackForFormula = [];
    
    // 验证合法
    if (!this.check()) {
      return 0;
    }

    this.mNumResult = this.getNumber();

    while (this.mNumPointPos <= this.mNumFormulaLen - 1) {
      // 哪个运算符
      switch (this.mStrFormula[this.mNumPointPos++]) {
      case "+":
        if (this.getNextOperator() > OperatorLV.ADDLEVEL) {
          this.push(OperatorType.ADD);
          this.mNumResult = this.getNumber();
        } else {
          this.mNumResult += this.getNumber();
        }
        break;
      case "-":
        if (this.getNextOperator() > OperatorLV.SUBLEVEL) {
          this.push(OperatorType.SUB);
          this.mNumResult = this.getNumber();
        } else {
          this.mNumResult -= this.getNumber();
        }
        break;
      case "*":
        if (this.getNextOperator() > OperatorLV.MULLEVEL) {
          this.push(OperatorType.MUL);
          this.mNumResult = this.getNumber();
        } else {
          this.mNumResult *= this.getNumber();
          if (this.mNumStackNum > 0 && this.getNextOperator() < OperatorLV.MULLEVEL && this.getStack(this.mNumStackNum).bracket >= this.mNumBracket) {
            this.pop();
          }
        }
        break;
      case "/":
        if (this.getNextOperator() > OperatorLV.DIVLEVEL) {
          this.push(OperatorType.DIV);
          this.mNumResult = this.getNumber();
        } else {
          this.mNumResult /= this.getNumber();
          if (this.mNumStackNum > 0 && this.getNextOperator() < OperatorLV.DIVLEVEL && this.getStack(this.mNumStackNum).bracket >= this.mNumBracket) {
            this.pop();
          }
        }
        break;
      case "%":
        if (this.getNextOperator() > OperatorLV.MODLEVEL) {
          this.push(OperatorType.MOD);
          this.mNumResult = this.getNumber();
        } else {
          this.mNumResult %= this.getNumber();
          if (this.mNumStackNum > 0 && this.getNextOperator() < OperatorLV.MODLEVEL && this.getStack(this.mNumStackNum).bracket >= this.mNumBracket) {
            this.pop();
          }
        }
        break;
      case ")": // 右括号
        this.mNumBracket -= 1;
        // 括号前面为空
        if (this.getStack(this.mNumStackNum).opsign === 0) {
          this.pop();
          break;
        }
        while (this.mNumStackNum > 0 && this.getNextOperator() <= this.getLevel(this.getStack(this.mNumStackNum).opsign)
          && this.getStack(this.mNumStackNum).bracket >= this.mNumBracket && this.getStack(this.mNumStackNum).opsign !== 0) {
          // 将本层括号内可以pop的都pop
          this.pop();
        }
        break;
      case "^":
        if (this.getNextOperator() > OperatorLV.POWLEVEL) {
          this.push(OperatorType.POW);
          this.mNumResult = this.getNumber();
        } else {
          this.mNumResult = Math.pow(this.mNumResult, this.getNumber());
          while (this.mNumStackNum > 0 && this.getNextOperator() <= this.getLevel(this.getStack(this.mNumStackNum).opsign)
            && this.getStack(this.mNumStackNum).bracket >= this.mNumBracket) { 
              this.pop(); 
            }
        }
        break;
      case "!":
        if (this.getNextOperator() > OperatorLV.FACTLEVEL) {
          this.push(OperatorType.FACT);
          this.mNumResult = this.getNumber();
        } else {
          this.mNumResult = this.fact(this.mNumResult);
          while (this.mNumStackNum > 0 && this.getNextOperator() <= this.getLevel(this.getStack(this.mNumStackNum).opsign)
            && this.getStack(this.mNumStackNum).bracket >= this.mNumBracket) { 
              this.pop(); 
            }
        }
        break;
      }
    }  
    return this.mNumResult;
  
  }

  private getNumber(): number {
    if (this.mNumPointPos > this.mNumFormulaLen - 1) {
      return 0;
    }

    let strnum = "";

    // 一开始就是负号
    if (this.mStrFormula[this.mNumPointPos] === "-") {
      return 0;   // 疑问 为什么此处m_nPointPos不+1
    }
  
    while (this.mStrFormula[this.mNumPointPos] === "(") {
      // 负号
      if (this.mStrFormula[this.mNumPointPos + 1] === "-") {
        this.mNumPointPos++;
        return 0;
      } else if (this.mStrFormula[this.mNumPointPos + 1] === "(") {
        this.push(0);
      } else {
        break;
      } 
    }
  
    while ((this.mStrFormula[this.mNumPointPos] < "0" || this.mStrFormula[this.mNumPointPos] > "9") && this.mStrFormula[this.mNumPointPos] !== ".") {
      this.mNumPointPos++;
    }
  
    while ((this.mStrFormula[this.mNumPointPos] >= "0" && this.mStrFormula[this.mNumPointPos] <= "9") || this.mStrFormula[this.mNumPointPos] === ".") {
      strnum += this.mStrFormula[this.mNumPointPos++];
      if (this.mNumPointPos > this.mNumFormulaLen - 1) {
        break;
      }
    }
  
    return Number(strnum);
  }
  
  private getNextOperator(): number {
    let p = this.mNumPointPos;
    while (p <= this.mNumFormulaLen - 1) {
      switch (this.mStrFormula[p++]) {
      case "+":
        return OperatorLV.ADDLEVEL;
      case "-":
        return OperatorLV.SUBLEVEL;
      case "*":
        return OperatorLV.MULLEVEL;
      case "/":
        return OperatorLV.DIVLEVEL;
      case "%":
        return OperatorLV.MODLEVEL;
      case "(":
        return OperatorLV.LEFTLEVEL;
      case "^":
        return OperatorLV.POWLEVEL;
      case "!":
        return OperatorType.FACT;
      case ")":
        return 0;
      }
    }
    return 0;
  }
  
  private push(opsign: number) {
    const p = new StackFormula();
    p.bracket = this.mNumBracket;
    if (this.mStrFormula[this.mNumPointPos] === "(") {
      ++ this.mNumBracket;
      this.mNumPointPos++;
    }
    p.num = this.mNumResult;
    p.opsign = opsign;
    this.mNumStackNum++;
    this.mArrStackForFormula.push(p);
  }
  
  private pop() {
    // const p = this.mArrStackForFormula.pop();
    const p: StackFormula = this.getStack(this.mNumStackNum);
    switch (p.opsign) {
    case OperatorType.ADD:
      this.mNumResult += p.num;
      break;
    case OperatorType.SUB:
      this.mNumResult = p.num - this.mNumResult;
      break;
    case OperatorType.MUL:
      this.mNumResult *= p.num;
      break;
    case OperatorType.DIV:
      this.mNumResult = p.num / this.mNumResult;
      break;
    case OperatorType.MOD:
      this.mNumResult = p.num % this.mNumResult;
      break;
    case OperatorType.POW:
      this.mNumResult = Math.pow(p.num, this.mNumResult);
      break;
    case OperatorType.FACT:
      this.mNumResult = this.fact(this.mNumResult);
      break;
    case 0:
      break;
    }
  
    this.mNumStackNum--;
  }
  
  // 检查表达式是否合法
  private check(): number {
    let left = 0;
    let right = 0;
    for (let i = 0; i < this.mNumFormulaLen; i++) {
      if (this.mStrFormula[i] <= "9" && this.mStrFormula[i] >= "0") {
        continue;
      }
      switch (this.mStrFormula[i]) {
      case "(":
        ++right;
        break;
      case ")":
        ++left;
        break;
      case "^":
      case "!":
      case "+":
      case "-":
      case "*":
      case "/":
      case "%":
      case ".":
        break;
      default:
        Misc.myError("GameFormula--error2");
        return 0;
      }
    }
    if (right !== left) {
      Misc.myError("GameFormula--error3");
      return 0;
    }
    return 1;
  }
  
  private fact(n: number): number {
    let r = 1;
    if (n <= 1) {
      return 1;
    }
    while (n > 1) {
      r *= n;
      -- n;
    }
    return r;
  }
  
  private getLevel(opsign: number): number {
    if (opsign <= 2) {
      return 1;
    } 
      
    if (opsign <= 4) {
      return 2;
    } 
      
    return opsign - 2;
  }
  
  // 参数n的意思--n==0和1时，返回的都是m_FirstStack指针
  private getStack(n: number): StackFormula {
    n = n - 1;
    n = Math.max(0, n);
    return this.mArrStackForFormula[n];
  }
}
