!function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){!function(e,t,n){e(".dripTypeOptions #datepicker").datepicker();var i=n.View.extend({el:"#content-drip-lesson .inside",events:{"change .sdc-lesson-drip-type":"dripTypeChange","click .send_test_email":"sendTestEmail"},initialize:function(){this.$lessonDatePicker=this.$("#scd-lesson-datepicker"),this.setInitialDripType(),this.takeControl(),this.render(),this.$lessonDatePicker.datepicker({dateFormat:"yy-mm-dd"})},setInitialDripType:function(){var e=this.$("select.sdc-lesson-drip-type").val();return t.isEmpty(e)?this.dripType="none":this.dripType=e,this},takeControl:function(){this.$el.find(".dripTypeOptions").each((function(t,n){e(n).hasClass("hidden")&&e(n).hide().removeClass("hidden")}))},render:function(e){this.$el.find(".dripTypeOptions").hide(),"none"!==this.dripType&&("dynamic"===this.dripType&&(hasPre=this.$("select.sdc-lesson-drip-type option.dynamic").data("has-pre"),"false"===hasPre.toString().trim()&&this.$(".pre-requisite-notice").show()),this.$el.find(".dripTypeOptions."+this.dripType).show())},dripTypeChange:function(e){"change"===e.type&&"sdc-lesson-drip-type"===e.target.className&&(this.dripType=e.target.value,this.render())},sendTestEmail:function(e){var t={action:"send_test_email",nonce:scdManualDrip.nonce,userId:jQuery("#user-id").val(),lessonId:jQuery("#post_ID").val()};jQuery.post(ajaxurl,t,(function(e){scdManualDrip.nonce=e.data.newNonce,alert(e.data.notice)}))}});window.dripMetaBox=new i}(jQuery,_,Backbone)}]);