(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,a,t){e.exports=t(45)},42:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var l=t(1),n=t.n(l),s=t(17),r=t.n(s),o=t(5),m=t(4),c=t(2),i=(t(27),t(29),t(41),function(e){var a=function(a){switch(a.target.name){case"interest":e.updatePercentageInput(a.target.name,a.target.value);break;default:e.updateGlobalState(a.target.name,a.target.value)}},t=e.loan,l=e.interest,s=e.fees,r=e.timeUnity;return n.a.createElement(n.a.Fragment,null,n.a.createElement("form",{className:"col-md-6"},n.a.createElement("legend",null,"Datos para el cliente"),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"loan_amount",className:"form-label"},"Monto del pr\xe9stamo"),n.a.createElement("input",{min:0,name:"loan",type:"number",className:"form-control",id:"loan_amount","aria-describedby":"loan_amountHelp",value:t,onChange:a}),n.a.createElement("div",{id:"loan_amountHelp",className:"form-text"},"Inserte una cantidad de dinero que desee simular")),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"interest_rate",className:"form-label"},"Tasa de interes"),n.a.createElement("input",{name:"interest",type:"text",className:"form-control",id:"interest_rate","aria-describedby":"interest_rateHelp",value:l,onChange:a,onBlur:e.blurPercetageInput}),n.a.createElement("div",{id:"interest_rateHelp",className:"form-text"},"Inserte el porcentaje de la tasa de interes deseada")),n.a.createElement("div",{className:"row g-3 mb-3"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("label",{htmlFor:"fees",className:"form-label"},"Cuotas"),n.a.createElement("input",{name:"fees",type:"number",className:"form-control",id:"fees","aria-describedby":"feesHelp",value:s,onChange:a,min:1}),n.a.createElement("div",{id:"feesHelp",className:"form-text"},"Inserte la cantidad de cuotas para pagar el pr\xe9stamo")),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("label",{htmlFor:"time_unity",className:"form-label"},"Unidad de tiempo"),n.a.createElement("select",{className:"form-select",name:"timeUnity",id:"time_unity",onChange:a,value:r},n.a.createElement("option",{value:"D\xedas"},"D\xedas"),n.a.createElement("option",{value:"Semanas"},"Semanas"),n.a.createElement("option",{value:"Quincenas"},"Quincenas"),n.a.createElement("option",{value:"Meses"},"Meses"),n.a.createElement("option",{value:"A\xf1os"},"A\xf1os"))))))}),d=function(e){var a=e.loan,t=e.interest,s=e.fees;t=t.replace("%",""),a=parseFloat(a);var r=Object(l.useState)({payments:0}),o=Object(c.a)(r,2),m=o[0],i=o[1],d=a*(t/100),u=a/s,p=u+d,b=d*s,E=b/a*100;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"col-md-6"},n.a.createElement("legend",null,"C\xe1lculos resultantes"),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"fee_gain",className:"form-label"},"Ganancia por cuota"),n.a.createElement("input",{readOnly:!0,type:"number",className:"form-control",id:"fee_gain","aria-describedby":"fee_gainHelp",value:d})),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"capital_subcription",className:"form-label"},"Abono a capital"),n.a.createElement("input",{readOnly:!0,type:"number",className:"form-control",id:"capital_subcription","aria-describedby":"capital_subcriptionHelp",value:u.toFixed(3)})),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"fee_pay",className:"form-label"},"Pago por cuota"),n.a.createElement("input",{readOnly:!0,type:"number",className:"form-control",id:"fee_pay","aria-describedby":"fee_payHelp",value:p.toFixed(3)})),n.a.createElement("hr",null),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"total_gains",className:"form-label"},"Ganancias totales o intereses totales"),n.a.createElement("input",{readOnly:!0,type:"number",className:"form-control",id:"total_gains","aria-describedby":"total_gainsHelp",value:b})),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"total_paid",className:"form-label"},"Total pagado"),n.a.createElement("input",{readOnly:!0,type:"number",className:"form-control",id:"total_paid","aria-describedby":"total_paidHelp",value:b+a}),n.a.createElement("div",{id:"total_paidHelp",className:"form-text"},"Corresponde al total de dinero pagado por el cliente por el cr\xe9dito, esto es la suma de los intereses pagados con el pr\xe9stamo inicial")),n.a.createElement("hr",null),n.a.createElement("div",{className:"row g-3 mb-3"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("label",{htmlFor:"gains_per_fee",className:"form-label"},"Ganancias en \u03b1 pagos "),n.a.createElement("input",{readOnly:!0,type:"number",className:"form-control",id:"gains_per_fee","aria-describedby":"gains_per_feeHelp",value:m.payments*d}),n.a.createElement("div",{id:"gains_per_feeHelp",className:"form-text"},"Inserte hasta qu\xe9 cantidad de cuotas desea simular los pagos")),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("label",{htmlFor:"fees_to_simulate",className:"form-label"},"Pagos realizados"),n.a.createElement("input",{type:"number",className:"form-control",id:"fees_to_simulate",min:0,"aria-describedby":"fees_to_simulateHelp",value:m.payments,onChange:function(e){i({payments:e.target.value})}}))),n.a.createElement("div",{className:"row g-3 mb-3"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("label",{htmlFor:"percentage_paid",className:"form-label"},"Porcentaje total extra pagado"),n.a.createElement("input",{readOnly:!0,type:"text",className:"form-control",id:"percentage_paid","aria-describedby":"percentage_paidHelp",value:E+"%"}),n.a.createElement("div",{id:"percentage_paidHelp",className:"form-text"},"Porcentaje del pr\xe9stamo pagado por el mismo al culminar los pagos")),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("label",{htmlFor:"percentage_per_fee",className:"form-label"},"Porcentaje por cuota pagado"),n.a.createElement("input",{readOnly:!0,type:"text",className:"form-control",id:"percentage_per_fee","aria-describedby":"percentage_per_feeHelp",value:(E/s).toFixed(3)+"%"}),n.a.createElement("div",{id:"percentage_per_feeHelp",className:"form-text"},"Porcentaje correspondiente a cada cuota del prestamo")))))},u=t(50),p=function(e){var a=Object(l.useState)(1),t=Object(c.a)(a,2),s=t[0],r=t[1],i=Object(l.useState)({id:null,name:"Example",age:18,dni:1234567,address:"...",phone:"+57 3008508791",email:"example@example.com",loan:{loan:35e4,interest:10,fees:6,timeUnity:"Meses(s)",scamRatio:30}}),d=Object(c.a)(i,2),p=d[0],b=d[1],E=function(e){b(Object(m.a)({},p,Object(o.a)({},e.target.name,e.target.value)))},f=function(e){b(Object(m.a)({},p,{loan:Object(m.a)({},p.loan,Object(o.a)({},e.target.name,e.target.value))}))};return n.a.createElement("form",{onSubmit:function(a){a.preventDefault();var t=function(){var a,t,l,n,s,r=p.loan,o=r.loan,c=r.interest,i=r.fees,d=r.timeUnity,b=r.scamRatio,E=p.name,f=p.age,N=p.dni,v=p.address,y=p.phone,h=p.email,g=o*(c/100),x=o/i,G=x+g,L=g*i,F=L/o*100,M=12,_=.5,O=.25,P=1/30,Y=i,j={},C=function(e,r){var o=1/r;return{capitalMonth:s=i<=o?x*i:x*o,capitalYear:n=e<=M?s*e:s*M,interestGainsMonth:l=i<=o?g*i:g*o,interestGainsYear:t=e<=M?l*e:l*M,gainsMonth:s+l,gainsYear:n+t,monthlyInterest:a=i<=o?c*i:c*o,annualInterest:e<=M?a*e:a*M}};switch(d){case"D\xeda(s)":j=C(Y=i*P,P);break;case"Semana(s)":j=C(Y=i*O,O);break;case"Quincena(s)":j=C(Y=i*_,_);break;case"A\xf1o(s)":Y=i*M,j=C(a,M);break;default:j=C(Y,1)}var H=100*Math.random(),I={id:Object(u.a)(),name:E,age:f,dni:N,address:v,phone:y,email:h,loan:Object(m.a)({loan:parseFloat(o),interest:c,fees:i,timeUnity:d,months:Y,scam:H<b,scamRatio:b,feeGain:g,capitalSubscription:x,feePayment:G,totalGains:L,paidRatio:F},j)};e.appendUser(I)},l=0;do{setTimeout(t,50),l++}while(l<s)}},n.a.createElement("div",{className:"row g-3"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("legend",null,"A\xf1adir un nuevo usuario"),n.a.createElement("div",{className:"row g-3 mb-3"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("label",{htmlFor:"name",className:"form-label"},"Nombre"),n.a.createElement("input",{name:"name",type:"text",className:"form-control",id:"name",onChange:E,value:p.name})),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("label",{htmlFor:"age",className:"form-label"},"Edad"),n.a.createElement("input",{name:"age",type:"number",className:"form-control",id:"age",onChange:E,value:p.age}))),n.a.createElement("div",{className:"row g-3 mb-3"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("label",{htmlFor:"dni",className:"form-label"},"DNI"),n.a.createElement("input",{name:"dni",type:"number",className:"form-control",id:"dni",onChange:E,value:p.dni})),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("label",{htmlFor:"address",className:"form-label"},"Direcci\xf3n"),n.a.createElement("input",{name:"address",type:"text",className:"form-control",id:"address",onChange:E,value:p.address}))),n.a.createElement("div",{className:"row g-3 mb-3"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("label",{htmlFor:"phone",className:"form-label"},"N\xfamero"),n.a.createElement("input",{name:"phone",type:"tel",className:"form-control",id:"phone",onChange:E,value:p.phone})),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("label",{htmlFor:"email",className:"form-label"},"Email"),n.a.createElement("input",{name:"email",type:"email",className:"form-control",id:"email",onChange:E,value:p.email}))),n.a.createElement("div",{className:"row g-3 mb-3"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("label",{htmlFor:"scamRatio",className:"form-label"},"Probabilidad de estafa"),n.a.createElement("input",{min:0,max:100,name:"scamRatio",type:"number",className:"form-control",id:"scamRatio",onChange:f,value:p.loan.scamRatio}),n.a.createElement("div",{className:"form-text"},"Rellene todos los campos del formulario para subir la informaci\xf3n")),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("label",{htmlFor:"numberOfUsers",className:"form-label"},"Cantidad de usuarios"),n.a.createElement("input",{min:1,max:200,name:"numberOfUsers",type:"number",className:"form-control",id:"numberOfUsers",onChange:function(e){return""===e.target.value?r(1):r(parseInt(e.target.value))},value:s}),n.a.createElement("div",{className:"form-text"},"El n\xfamero de veces que el usuario ser\xe1 a\xf1adido")),n.a.createElement("button",{type:"submit",className:"btn btn-primary"},"A\xf1adir usuario"))),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("legend",null,"Datos del pr\xe9stamo"),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"loan_amount",className:"form-label"},"Monto del pr\xe9stamo"),n.a.createElement("input",{name:"loan",type:"number",className:"form-control",id:"loan_amount","aria-describedby":"loan_amountHelp",onChange:f,value:p.loan.loan}),n.a.createElement("div",{id:"loan_amountHelp",className:"form-text"},"Inserte una cantidad de dinero que desee simular")),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"interest_rate",className:"form-label"},"Tasa de interes"),n.a.createElement("input",{name:"interest",type:"text",className:"form-control",id:"interest_rate","aria-describedby":"interest_rateHelp",onChange:f,value:p.loan.interest}),n.a.createElement("div",{id:"interest_rateHelp",className:"form-text"},"Inserte el porcentaje de la tasa de interes deseada")),n.a.createElement("div",{className:"row g-3 mb-3"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("label",{htmlFor:"fees",className:"form-label"},"Cuotas"),n.a.createElement("input",{name:"fees",type:"number",className:"form-control",id:"fees","aria-describedby":"feesHelp",onChange:f,value:p.loan.fees}),n.a.createElement("div",{id:"feesHelp",className:"form-text"},"Inserte la cantidad de cuotas para pagar el pr\xe9stamo")),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("label",{htmlFor:"time_unity",className:"form-label"},"Unidad de tiempo"),n.a.createElement("select",{className:"form-select",name:"timeUnity",id:"time_unity",onChange:f,value:p.loan.timeUnity},n.a.createElement("option",{value:"Mese(s)"},"Meses"),n.a.createElement("option",{value:"Quincena(s)"},"Quincenas"),n.a.createElement("option",{value:"Semana(s)"},"Semanas"),n.a.createElement("option",{value:"D\xeda(s)"},"D\xedas"),n.a.createElement("option",{value:"A\xf1o(s)"},"A\xf1os")))))))},b=t(6),E=t(0),f=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("nav",{className:"navbar navbar-expand-lg bg-light"},n.a.createElement("div",{className:"container-fluid mx-3"},n.a.createElement(b.b,{to:"/",className:"navbar-brand"},"Simulaci\xf3n"),n.a.createElement("ul",{className:"d-flex navbar-nav mb-2 mb-lg-0 justify-content-end"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(b.b,{to:"/simulations",className:"nav-link"},"Simular varios")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(b.b,{to:"/records",className:"nav-link"},"Registros"))))))},N=function(e){var a=e.isHidden,t=e.loan;return n.a.createElement("div",{className:"".concat(a?"hide":"show"," faded d-flex flex-column card p-1 mt-1 text-secondary")},n.a.createElement("small",null,"Interes por cuota: $".concat(t.feeGain)),n.a.createElement("small",null,"Capital por cuota: $".concat(t.capitalSubscription.toFixed(2))),n.a.createElement("small",{className:"border-bottom mb-1 pb-1"},"Pago por cuota: $".concat(t.feePayment.toFixed(2))),n.a.createElement("small",null,"Total intereses: $".concat(t.totalGains.toFixed(2))),n.a.createElement("small",{className:"border-bottom mb-1 pb-1"},"Total pagado: $".concat(t.loan+t.totalGains)),n.a.createElement("small",null,"Ganancia anual: $".concat(t.gainsYear.toFixed(2))),n.a.createElement("small",{className:"border-bottom mb-1 pb-1"},"Ganancia mensual: $".concat(t.gainsMonth.toFixed(2))),n.a.createElement("small",null,"Capital anual: $".concat(t.capitalYear.toFixed(2))),n.a.createElement("small",{className:"border-bottom mb-1 pb-1"},"Capital mensual: $".concat(t.capitalMonth.toFixed(2))),n.a.createElement("small",null,"Ganancias intereses anuales: $".concat(t.interestGainsYear.toFixed(2))),n.a.createElement("small",{className:"border-bottom mb-1 pb-1"},"Ganancias intereses mensuales: $".concat(t.interestGainsMonth.toFixed(2))),n.a.createElement("small",null,"Interes completo: ".concat(t.paidRatio.toFixed(2),"%")),n.a.createElement("small",null,"Interes anual: ".concat(t.annualInterest.toFixed(2),"%")),n.a.createElement("small",null,"Interes mensual: ".concat(t.monthlyInterest.toFixed(2),"%")))},v=function(e){var a=e.self,t=a.id,s=a.name,r=a.age,o=a.dni,m=a.address,i=a.phone,d=a.email,u=a.loan,p=Object(l.useState)({isHidden:!0}),b=Object(c.a)(p,2),E=b[0],f=b[1];return n.a.createElement("div",{className:u.scam?"card border-danger":"card border-success",style:{maxWidth:"270px"}},n.a.createElement("div",{className:"card-header"},n.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},n.a.createElement("div",{className:"text-dark"},i),n.a.createElement("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:function(a){return e.deleteUser(t)}}))),n.a.createElement("div",{className:u.scam?"card-body text-danger":"card-body text-success"},n.a.createElement("h5",{className:"card-title"},"".concat(s,". ").concat(r," a\xf1os")),n.a.createElement("div",{className:"card-text"},"$".concat(u.loan," a ").concat(u.interest,"% por ").concat(u.fees," ").concat(u.timeUnity.toLowerCase()),n.a.createElement("br",null),n.a.createElement("div",{className:"d-flex flex-column"},n.a.createElement("small",null,"Fiabilidad del ",100-u.scamRatio,"%"),n.a.createElement("small",null,"DNI: ",o),n.a.createElement("small",null,m),n.a.createElement("small",null,d),n.a.createElement("div",{className:"d-flex justify-content-end"},n.a.createElement("button",{className:"btn btn-outline-success btn-sm my-1",type:"button",onClick:function(){f({isHidden:!E.isHidden})}},E.isHidden?"Ver m\xe1s":"Esconder"))),n.a.createElement(N,{isHidden:E.isHidden,loan:u}))))},y=function(e){var a=e.users,t=e.setUsers,l=function(e){t({loans:a.loans.filter(function(a){return!(a.id===e)})})};return n.a.createElement("div",{className:"d-flex gap-3 flex-wrap justify-content-center align-items-start"},0===a.loans.length?n.a.createElement("div",{className:"card border-primary",style:{maxWidth:"20rem"}},n.a.createElement("div",{className:"card-header text-primary"},"Upps..."),n.a.createElement("div",{className:"card-body text-primary"},n.a.createElement("h5",{className:"card-title"},"No hay pr\xe9stamos"),n.a.createElement("div",{className:"card-text"},"A\xf1ade pr\xe9stamos llenando los datos de arriba"))):a.loans.map(function(e){return n.a.createElement(v,{key:e.id,self:e,deleteUser:l})}))},h=function(e){var a=e.users,t=e.results,l=e.refresh,s=e.setUsers,r=e.setResults,o=e.initialResults;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"row g-3"},n.a.createElement("div",{className:"col-md-6"},n.a.createElement("legend",{className:"text-center"},"Ganacias"),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"totalInterestGains",className:"form-label"},"Ganacias de intereses totales"),n.a.createElement("input",{readOnly:!0,name:"totalInterestGains",type:"text",className:"form-control",id:"totalInterestGains",value:"$".concat(t.totalGains)})),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"yearGains",className:"form-label"},"Ganacias de intereses por a\xf1o "),n.a.createElement("input",{readOnly:!0,name:"yearGains",type:"text",className:"form-control",id:"yearGains",value:"$".concat(t.interestGainsYear)})),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"monthGains",className:"form-label"},"Ganacias de intereses por mes"),n.a.createElement("input",{readOnly:!0,name:"monthGains",type:"text",className:"form-control",id:"monthGains",value:"$".concat(t.interestGainsMonth)})),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"yearGains",className:"form-label"},"Capital abonado por a\xf1o "),n.a.createElement("input",{readOnly:!0,name:"yearGains",type:"text",className:"form-control",id:"yearGains",value:"$".concat(t.gainsPerYear-t.interestGainsYear)})),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"monthGains",className:"form-label"},"Capital abonado por mes"),n.a.createElement("input",{readOnly:!0,name:"monthGains",type:"text",className:"form-control",id:"monthGains",value:"$".concat(t.gainsPerMonth-t.interestGainsMonth)})),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"yearGains",className:"form-label"},"Dinero recogido por a\xf1o "),n.a.createElement("input",{readOnly:!0,name:"yearGains",type:"text",className:"form-control",id:"yearGains",value:"$".concat(t.gainsPerYear)})),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"monthGains",className:"form-label"},"Dinero recogido por mes"),n.a.createElement("input",{readOnly:!0,name:"monthGains",type:"text",className:"form-control",id:"monthGains",value:"$".concat(t.gainsPerMonth)})),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"successfulLoans",className:"form-label"},"P\u0155estamos exitosos"),n.a.createElement("input",{readOnly:!0,name:"successfulLoans",type:"text",className:"form-control",id:"successfulLoans",value:t.successfulLoans}))),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("legend",{className:"text-center"},"P\xe9rdidas"),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"totalInterestLosses",className:"form-label"},"P\xe9rdidas de intereses totales"),n.a.createElement("input",{readOnly:!0,name:"totalInterestLosses",type:"text",className:"form-control",id:"totalInterestLosses",value:"$".concat(t.totalLosses)})),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"yearLosses",className:"form-label"},"P\xe9rdidas de intereses por a\xf1o"),n.a.createElement("input",{readOnly:!0,name:"yearLosses",type:"text",className:"form-control",id:"yearLosses",value:"$".concat(t.interestLossesYear)})),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"monthLosses",className:"form-label"},"P\xe9rdidas de intereses por mes"),n.a.createElement("input",{readOnly:!0,name:"monthLosses",type:"text",className:"form-control",id:"monthLosses",value:"$".concat(t.interestLossesMonth)})),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"yearLosses",className:"form-label"},"Capital perdido por a\xf1o"),n.a.createElement("input",{readOnly:!0,name:"yearLosses",type:"text",className:"form-control",id:"yearLosses",value:"$".concat(t.lossesPerYear-t.interestLossesYear)})),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"monthLosses",className:"form-label"},"Capital perdido por mes"),n.a.createElement("input",{readOnly:!0,name:"monthLosses",type:"text",className:"form-control",id:"monthLosses",value:"$".concat(t.lossesPerMonth-t.interestLossesMonth)})),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"yearLosses",className:"form-label"},"Dinero perdido por a\xf1o"),n.a.createElement("input",{readOnly:!0,name:"yearLosses",type:"text",className:"form-control",id:"yearLosses",value:"$".concat(t.lossesPerYear)})),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"monthLosses",className:"form-label"},"Dinero perdido por mes"),n.a.createElement("input",{readOnly:!0,name:"monthLosses",type:"text",className:"form-control",id:"monthLosses",value:"$".concat(t.lossesPerMonth)})),n.a.createElement("div",{className:"mb-3"},n.a.createElement("label",{htmlFor:"failedLoans",className:"form-label"},"Pr\xe9stamos fracasados"),n.a.createElement("input",{readOnly:!0,name:"failedLoans",type:"text",className:"form-control",id:"failedLoans",value:t.failedLoans}))),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("label",{htmlFor:"totalMoney",className:"form-label"},"Dinero ganado en total"),n.a.createElement("input",{readOnly:!0,name:"totalMoney",type:"text",className:"form-control",id:"totalMoney",value:"$".concat(t.totalMoneyReceived)})),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("label",{htmlFor:"totalLosses",className:"form-label"},"Dinero perdido en total"),n.a.createElement("input",{readOnly:!0,name:"totalLosses",type:"text",className:"form-control",id:"totalLosses",value:"$".concat(t.totalMoneyLost)})),n.a.createElement("div",{className:"btn-group",role:"group"},n.a.createElement("button",{onClick:l,className:"btn btn-primary w-50"},"Refrescar"),n.a.createElement("button",{onClick:function(){s({loans:[]}),r(o)},className:"btn btn-danger w-50"},"Eliminar todos"))),n.a.createElement("hr",null),n.a.createElement(y,{users:a,setUsers:s}))},g=function(){return n.a.createElement("div",{className:"text-center"},"Pr\xf3ximamente...")},x=(t(42),function(){var e={totalGains:0,totalLosses:0,gainsPerMonth:0,gainsPerYear:0,interestGainsMonth:0,interestGainsYear:0,lossesPerMonth:0,lossesPerYear:0,interestLossesMonth:0,interestLossesYear:0,failedLoans:0,successfulLoans:0,totalMoneyReceived:0,totalMoneyLost:0},a=Object(l.useState)({loans:[]}),t=Object(c.a)(a,2),s=t[0],r=t[1],u=Object(l.useState)({loan:1,interest:"5%",fees:1,timeUnity:"Meses"}),N=Object(c.a)(u,2),v=N[0],y=N[1],x=Object(l.useState)(e),G=Object(c.a)(x,2),L=G[0],F=G[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement(b.a,null,n.a.createElement(f,null),n.a.createElement(E.c,null,n.a.createElement(E.a,{exact:!0,path:"/",element:n.a.createElement("div",{className:"container my-4"},n.a.createElement("div",{className:"row g-3"},n.a.createElement(i,{updatePercentageInput:function(e,a){a=a.replace("%",""),v[e].length>a.length?y(Object(m.a)({},v,Object(o.a)({},e,a))):y(Object(m.a)({},v,Object(o.a)({},e,a+"%")))},updateGlobalState:function(e,a){a=function(e){return""===e?0:e}(a),y(Object(m.a)({},v,Object(o.a)({},e,a)))},blurPercetageInput:function(e){var a=e.target.value;a=a.replace("%",""),y(Object(m.a)({},v,Object(o.a)({},e.target.name,a+"%")))},loan:v.loan,fees:v.fees,interest:v.interest,timeUnity:v.timeUnity}),n.a.createElement(d,{loan:v.loan,fees:v.fees,interest:v.interest})))}),n.a.createElement(E.a,{path:"simulations",element:n.a.createElement("div",null,n.a.createElement("div",{className:"container my-4"},n.a.createElement(p,{appendUser:function(a){s.loans.push(a),r(Object(m.a)({},s)),F(e);var t={totalGains:L.totalGains+(a.loan.scam?0:+a.loan.totalGains),totalLosses:L.totalLosses+(a.loan.scam?+a.loan.totalGains:0),successfulLoans:L.successfulLoans+(a.loan.scam?0:1),failedLoans:L.failedLoans+(a.loan.scam?1:0),totalMoneyReceived:L.totalMoneyReceived+(a.loan.scam?0:a.loan.loan+a.loan.totalGains),totalMoneyLost:L.totalMoneyLost+(a.loan.scam?a.loan.loan+a.loan.totalGains:0),gainsPerMonth:L.gainsPerMonth+(a.loan.scam?0:a.loan.gainsMonth),gainsPerYear:L.gainsPerYear+(a.loan.scam?0:a.loan.gainsYear),interestGainsMonth:L.interestGainsMonth+(a.loan.scam?0:a.loan.interestGainsMonth),interestGainsYear:L.interestGainsYear+(a.loan.scam?0:a.loan.interestGainsYear),lossesPerMonth:L.lossesPerMonth+(a.loan.scam?a.loan.gainsMonth:0),lossesPerYear:L.lossesPerYear+(a.loan.scam?a.loan.gainsYear:0),interestLossesMonth:L.interestLossesMonth+(a.loan.scam?a.loan.interestGainsMonth:0),interestLossesYear:L.interestLossesYear+(a.loan.scam?a.loan.interestGainsYear:0)};F(Object(m.a)({},L,t))},users:s}),n.a.createElement("hr",null),n.a.createElement(h,{users:s,setUsers:r,results:L,setResults:F,refresh:function(){var a=e;s.loans.forEach(function(e){a.totalGains=a.totalGains+(e.loan.scam?0:e.loan.totalGains),a.totalLosses=a.totalLosses+(e.loan.scam?e.loan.totalGains:0),a.successfulLoans=a.successfulLoans+(e.loan.scam?0:1),a.failedLoans=a.failedLoans+(e.loan.scam?1:0),a.totalMoneyReceived=a.totalMoneyReceived+(e.loan.scam?0:e.loan.loan+e.loan.totalGains),a.totalMoneyLost=a.totalMoneyLost+(e.loan.scam?e.loan.loan+e.loan.totalGains:0),a.gainsPerMonth=a.gainsPerMonth+(e.loan.scam?0:e.loan.gainsMonth),a.gainsPerYear=a.gainsPerYear+(e.loan.scam?0:e.loan.gainsYear),a.interestGainsMonth=a.interestGainsMonth+(e.loan.scam?0:e.loan.interestGainsMonth),a.interestGainsYear=a.interestGainsYear+(e.loan.scam?0:e.loan.interestGainsYear),a.lossesPerMonth=a.lossesPerMonth+(e.loan.scam?e.loan.gainsMonth:0),a.lossesPerYear=a.lossesPerYear+(e.loan.scam?e.loan.gainsYear:0),a.interestLossesMonth=a.interestLossesMonth+(e.loan.scam?e.loan.interestGainsMonth:0),a.interestLossesYear=a.interestLossesYear+(e.loan.scam?e.loan.interestGainsYear:0)}),F(a)},initialResults:e})))}),n.a.createElement(E.a,{path:"records",element:n.a.createElement(g,null)}))))}),G=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,49)).then(function(a){var t=a.getCLS,l=a.getFID,n=a.getFCP,s=a.getLCP,r=a.getTTFB;t(e),l(e),n(e),s(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(x,null))),G()}},[[18,3,2]]]);
//# sourceMappingURL=main.8cce3391.chunk.js.map