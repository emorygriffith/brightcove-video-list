// var account_username = 'emorygriffith91@gmail.com';
// var account_password = 'passwordForMe1';
// var account_id = '4744530050001';
// var call_url = 'https://players.api.brightcove.com/v1/accounts/' + account_id + '/players';
//
// var makeAjaxCall = function (callURL, callType, callData) {
//   if (callData) {
//     $.ajax({
//       type: callType,
//       headers: {
//         "Authorization": "Basic " + btoa(account_username + ":" + account_password),
//         "Content-Type": "application/json"
//       },
//       url: callURL,
//       data: JSON.stringify(callData),
//       success: ajaxSuccess,
//     //  error: ajaxError
//     });
//   } else {
//     $.ajax({
//       type: callType,
//       headers: {
//         "Authorization": "Basic " + btoa(account_username + ":" + account_password),
//         "Content-Type": "application/json"
//       },
//       url: callURL,
//       success: ajaxSuccess,
//       //error: ajaxError
//     });
//   }
// };
//
// var ajaxSuccess = function (data) {
//
// 	var results = data.items;
// 	console.log(results);
//
// 	$.each(results, function(key, value){
//
// //		 $('.jsonResponse').append("<div>" + value.name + "  " + value.id + "</div>")
// 	});
//
// };
//
// makeAjaxCall(call_url, "GET", null);
