define(["datetime","paper-icon-button-light"],function(e){function i(e,i){require(["confirm"],function(t){t(Globalize.translate("MessageConfirmSeriesCancellation"),Globalize.translate("HeaderConfirmSeriesCancellation")).then(function(){Dashboard.showLoadingMsg(),ApiClient.cancelLiveTvSeriesTimer(i).then(function(){require(["toast"],function(e){e(Globalize.translate("MessageSeriesCancelled"))}),a(e)})})})}function t(t,a){var r="";a.length&&(r+='<div class="paperList">');for(var o=0,l=a.length;l>o;o++){var s=a[o];if(r+="<paper-icon-item>",r+='<paper-fab mini icon="live-tv" item-icon></paper-fab>',r+="<paper-item-body three-line>",r+='<a class="clearLink" href="livetvseriestimer.html?id='+s.Id+'">',r+="<div>",r+=s.Name,r+="</div>",r+="<div secondary>",s.DayPattern)r+=s.DayPattern;else{var c=s.Days||[];r+=c.join(", ")}r+=s.RecordAnyTime?" - "+Globalize.translate("LabelAnytime"):" - "+e.getDisplayTime(s.StartDate),r+="</div>",r+="<div secondary>",s.RecordAnyChannel?r+=Globalize.translate("LabelAllChannels"):s.ChannelId&&(r+=s.ChannelName),r+="</div>",r+="</a>",r+="</paper-item-body>",r+='<button type="button" is="paper-icon-button-light" data-seriestimerid="'+s.Id+'" title="'+Globalize.translate("ButtonCancelSeries")+'" class="btnCancelSeries autoSize"><i class="md-icon">cancel</i></button>',r+="</paper-icon-item>"}a.length&&(r+="</div>");var d=t.querySelector("#items");d.innerHTML=r,a.length&&d.querySelector(".paperList").addEventListener("click",function(e){var a=n(e.target,"btnCancelSeries");a&&i(t,a.getAttribute("data-seriestimerid"))}),Dashboard.hideLoadingMsg()}function n(e,i){for(;!e.classList||!e.classList.contains(i);)if(e=e.parentNode,!e)return null;return e}function a(e){Dashboard.showLoadingMsg(),ApiClient.getLiveTvSeriesTimers(r).then(function(i){require(["paper-fab","paper-item-body","paper-icon-item"],function(){t(e,i.Items)})})}var r={SortBy:"SortName",SortOrder:"Ascending"};return function(e,i,t){var n=this;n.renderTab=function(){a(t)}}});