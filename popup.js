function loadUrls() {
 

  var urls = document.getElementById('urls').value.split('n');
 

  for(var i=0; i<urls.length; i++){
    cleanUrl = urls[i].replace(/s/g, '');
    if(cleanUrl != '') {
        chrome.tabs.create({"url": cleanUrl, "selected": false}); 
    } else {
        document.getElementById('urls').innerHTML = "No value spec ified";
        }
      }
    }



  document.addEventListener('DOMContentLoaded', function () {
 
      document.getElementById('button').addEventListener('click', loadUrls);
  });
