sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("calc.project1.controller.View1", {
            onInit: function () {

            },
    onPress : function(oEvent){
    var inputNumber1 = this.byId("inputNumber1"),
    inputNumber2 = this.byId("inputNumber2"),   
    inputNumber3 = this.byId("inputNumber3");
    var  Value1 = parseInt(inputNumber1.getValue()),
         Value2 = parseInt(inputNumber2.getValue());
    var  Result = Value1+Value2;
        inputNumber3.setValue(Result);
}    
        });
    });
