import{u as T,d as y,r as f,e as g,f as v,o as s,c as o,g as r,b as i,h as b,a as h,F as D,i as w,n as C}from"./index-db1b394d.js";import R from"./ButtonAnswer-3ba9fa84.js";import $ from"./CheckboxAnswer-e7370a3e.js";import B from"./CheckboxImageAnswer-5b12c9a8.js";import I from"./ContentImages-6c671b05.js";import S from"./ContentAnswersOnImage-a36bdaeb.js";import _ from"./ContentText-6e47806b.js";import"./_plugin-vue_export-helper-c27b6911.js";import"./answerCheckMark-bb6b8989.js";import"./ModalImage-31d67f74.js";const M={key:1,class:"left-side"},H={class:"content-answers"},U={key:0},V=["innerHTML"],W={key:1,class:"answers-checkboxes-list"},N={key:2,class:"answers-image-checkboxes-list"},O={key:3,class:"answers-buttons-list"},j=["innerHTML"],Y={__name:"ContentAnswers",props:["componentData","testStyle","step"],emits:["action","chooseAction"],setup(n,{emit:k}){const e=n;T(t=>({"08143f29":u.value,"2f68371e":p.value})),y();const u=f(""),p=f(null);e.componentData.columns?u.value=`repeat(${e.componentData.columns}, minmax(0, 1fr))`:u.value="repeat(2, minmax(0, 1fr))";const L=g(()=>`<p>${e.componentData.legendText} <span style="color: ${e.componentData.legendTextColor};">${e.componentData.legendColoredText}</span>`),m=t=>{if(!e.componentData.isComplete)if(e.componentData.multiple)e.componentData.answersList[t].isChecked?e.componentData.answersList[t].isChecked=!1:e.componentData.answersList[t].isChecked=!0;else{for(let c=0;c<e.componentData.answersList.length;c++)e.componentData.answersList[c].isChecked=!1;e.componentData.answersList[t].isChecked=!0,e.componentData.answersList[t].action&&e.componentData.answersList[t].action.clickAction?k("action",e.componentData.answersList[t].action):k("chooseAction",e.componentData.answersList[t].action)}},x=()=>{if(e.componentData.answersList)for(let t=e.componentData.answersList.length-1;t>0;t--){const c=Math.floor(Math.random()*(t+1));[e.componentData.answersList[t],e.componentData.answersList[c]]=[e.componentData.answersList[c],e.componentData.answersList[t]]}},A=g(()=>e.componentData.answersList.every(t=>!t.isChecked));return v(()=>{e.componentData.doShuffle&&A.value&&x(),e.componentData.answersList&&(p.value=`${100/e.componentData.answersList.length}%`,console.log(12321214,p.value))}),(t,c)=>(s(),o("div",{class:C({"multi-wrapper":n.componentData.isAnswersWithImage,"image-answers-wrapper":n.componentData.isAnswersOnImage})},[n.componentData.isAnswersOnImage?(s(),r(S,{key:0,componentData:e.componentData,onSwitchAnswer:m},null,8,["componentData"])):i("",!0),n.componentData.isAnswersWithImage?(s(),o("div",M,[b(I,{componentData:n.componentData.imagesData,step:n.step},null,8,["componentData","step"])])):i("",!0),h("div",{class:C([{"right-side":n.componentData.isAnswersWithImage},"flex-justify-center"])},[n.componentData.isAnswersWithImage&&n.componentData.textData!=null?(s(),r(_,{key:0,componentData:n.componentData.textData,testStyle:e.testStyle},null,8,["componentData","testStyle"])):i("",!0),h("div",H,[e.componentData.hints?(s(),o("div",U,[h("div",{innerHTML:e.componentData.hintText,class:"answers-hint-text"},null,8,V)])):i("",!0),e.componentData.answersButtonType==="checkboxes"?(s(),o("ul",W,[(s(!0),o(D,null,w(e.componentData.answersList,(a,l)=>(s(),r($,{key:l,answerText:a.answerText,isChecked:!!a.isChecked,isDisable:!!e.componentData.isComplete,isRight:!!a.isRight,isRightAlt:!!a.isRightAlt,checkboxColor:n.componentData.legendTextColor,onClick:d=>m(l),class:"answers-checkboxes-list-iiem"},null,8,["answerText","isChecked","isDisable","isRight","isRightAlt","checkboxColor","onClick"]))),128))])):i("",!0),e.componentData.answersButtonType==="imageCheckboxes"?(s(),o("ul",N,[(s(!0),o(D,null,w(e.componentData.answersList,(a,l)=>(s(),r(B,{key:l,answerText:a.answerText,isChecked:!!a.isChecked,isDisable:!!e.componentData.isComplete,isRight:!!a.isRight,isRightAlt:!!a.isRightAlt,checkboxColor:n.componentData.legendTextColor,imageURL:a.image.imageURL,onClick:d=>m(l),class:"answers-checkboxeslist-image-iiem"},null,8,["answerText","isChecked","isDisable","isRight","isRightAlt","checkboxColor","imageURL","onClick"]))),128))])):i("",!0),e.componentData.answersButtonType==="buttons"?(s(),o("div",O,[(s(!0),o(D,null,w(e.componentData.answersList,(a,l)=>(s(),r(R,{answerText:a.answerText,isChecked:!!a.isChecked,onClick:d=>m(l),class:"answers-buttons-list-iiem"},null,8,["answerText","isChecked","onClick"]))),256))])):i("",!0),n.componentData.showLegend?(s(),o("div",{key:4,innerHTML:L.value,class:"answers-legend"},null,8,j)):i("",!0)])],2)],2))}};export{Y as default};
