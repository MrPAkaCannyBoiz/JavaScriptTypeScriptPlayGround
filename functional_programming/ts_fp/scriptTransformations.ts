// @ts-ignore
import SCRIPTS from "./scripts.js";

function oldestLivingScript(scripts:any[]): any {
    return scripts.filter(s => s.living).reduce((res, s) => {
        if (res.year < s.year){
            return res
        }
        else{
            return s
        }
    })
}

console.log(oldestLivingScript(SCRIPTS))

export {};