const rewire = require("rewire")
const Time = rewire("./Time")
const getTwoDigits = Time.__get__("getTwoDigits")
// @ponicode
describe("getTwoDigits", () => {
    test("0", () => {
        let callFunction = () => {
            getTwoDigits("2017-09-29T23:01:00.000Z")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            getTwoDigits("2017-09-29T19:01:00.000")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            getTwoDigits("Mon Aug 03 12:45:00")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            getTwoDigits("01:04:03")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            getTwoDigits(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
