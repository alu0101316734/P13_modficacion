import "mocha"
import { expect } from "chai"
import { add } from "../src/index.js"


describe('Test',() =>{
    it('Prueba',() =>{
        expect(add(1,2)).to.be.equal(3)
    })
})