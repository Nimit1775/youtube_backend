class Apierror extends Error {

    Constructor  (
        statuscode ,
        message = "Something went wrong",
        errors =[],
        stack = ""

    ){ 
        super(message)
        this.statuscode = statuscode
        this.data = null 
        this.message = message
        this.sucess = false
        this.errors =  errors

        if (stack){
            this.stack = stack 

        }else{
            Error.captureStackTrace(this , this.Constructor)
        }

    }

}
export {Apierror}