
//'use strict';
(function(window) {

var globalConfigData;
var globalMeta;
var globalClosePopup;
var globalButtonClicked;
var globalIsHostedPage;

var w = window;


function closePopup(){
    

    if(document.getElementById('flwpugpaidid'))
        document.body.removeChild( document.getElementById('flwpugpaidid') );

    if(globalConfigData && globalConfigData.onclose){
        globalConfigData.onclose();
    }

    if(document.getElementById('rve_spinner_container_0999'))
        document.body.removeChild( document.getElementById('rve_spinner_container_0999') );

}
globalClosePopup = closePopup;

//message handlers
var message_handlers = {};
message_handlers.readytorecieve = function (d) {

    d.source.postMessage({name:"updategotten", meta:globalMeta},d.origin);

}

var loadtimeout_settimeouthandler;

function handleLoadTimeout(timeout_callback, wait){
        
        loadtimeout_settimeouthandler = setTimeout(function (){
         closePopup();
         try{ timeout_callback(); }catch(e){}
    }, wait)

}

message_handlers.allcontentloaded = function (d) { 
    
    //clearTimeout for waiting
    clearTimeout(loadtimeout_settimeouthandler);

    d.source.postMessage({name:"clickreport", time:globalButtonClicked}, d.origin);

    //document.body.removeChild( document.getElementsByClassName('spinner-container')[0]);

    document.body.removeChild( document.getElementById('rve_spinner_container_0999') );
    if(globalConfigData && globalConfigData.onopen){
        globalConfigData.onopen();
    }

    function icheckNext(err, msg){
        d.source.postMessage({name:"icheckcomplete", check_error:err, check_error_message:msg},d.origin);
    }
    if(globalConfigData && globalConfigData.onintegritycheck){

        globalConfigData.onintegritycheck(d.data.hash, icheckNext);

    }else{
        icheckNext();
    }

}

message_handlers.charge_complete = function (d){

    if(globalConfigData && globalConfigData.chargecomplete){
        globalConfigData.chargecomplete(d.data.type,d.data.data); 
    }

}

message_handlers.charge_init = function (d){

    if(globalConfigData && globalConfigData.chargeinit){
        globalConfigData.chargeinit(d.data.type,d.data.timestamp); 
    }

}

message_handlers.opop = function (d) {

    if(globalConfigData && globalConfigData.callback)
        globalConfigData.callback(d.data); 

    //delay by five seconds
    //only redirect when we are not on a hosted page
    setTimeout(function(){
    if(!globalIsHostedPage && globalConfigData && globalConfigData.redirect_url && d.data.success){ 
        if(globalConfigData.redirect_post){

            document.body.innerHTML += '<form method="POST" id="redform"><textarea name="resp" id="json"></textarea></form>';
            document.getElementById('redform').setAttribute('action', globalConfigData.redirect_url);
            document.getElementById('json').value = JSON.stringify(d.data);
            document.getElementById('redform').submit();
        }
        else{

        if(globalConfigData.redirect_no_json){
            window.location.href = globalConfigData.redirect_url;
        }else{
         
            document.body.innerHTML += '<form method="GET" id="redform"><textarea name="resp" id="json"></textarea></form>';
            document.getElementById('redform').setAttribute('action', globalConfigData.redirect_url);
            document.getElementById('json').value = JSON.stringify(d.data);
            document.getElementById('redform').submit();
        }

        }
    }
}, 5000);//end set timeout

}

message_handlers.vbvcomplete = function (d) {
 
     if(globalConfigData &&  globalConfigData.callback)
        globalConfigData.callback(d.data);

        //only redirect when we are not on a hosted page
    setTimeout(function(){
     if(!globalIsHostedPage && globalConfigData && globalConfigData.redirect_url && (d.data.respcode == "00" || d.data.respcode == "0") ){
       if(globalConfigData.redirect_post){

            document.body.innerHTML += '<form method="POST" id="redform"><textarea name="resp" id="json"></textarea></form>';
            document.getElementById('redform').setAttribute('action', globalConfigData.redirect_url);
            document.getElementById('json').value = JSON.stringify(d.data);
            document.getElementById('redform').submit();
        }
        else{
         
            if(globalConfigData.redirect_no_json){
                window.location.href = globalConfigData.redirect_url;

            }else{ 

                document.body.innerHTML += '<form method="GET" id="redform"><textarea name="resp" id="json"></textarea></form>';
                document.getElementById('redform').setAttribute('action', globalConfigData.redirect_url);
                document.getElementById('json').value = JSON.stringify(d.data);
                document.getElementById('redform').submit();
            }

        }
     }
    }, 5000);//end set timeout
                     
}

message_handlers.closeiframe = function (d){

        closePopup();

}


w
.addEventListener("message", function (message_data){

    if(message_data && message_data.data && message_data.data.name && message_handlers[message_data.data.name]){
        message_handlers[message_data.data.name](message_data);
    }

}, false);


         

//document.addEventListener("DOMContentLoaded", function(event) { 
     function generateQueryString(obj) {
    	var str = [];
    	for( var prop in obj )
    	{
    		if(obj.hasOwnProperty(prop) ) {
    			var v = obj[prop];
                v = encodeURIComponent(v);
    			str.push(prop + "=" + v);
    		}
    	}
    	return (str.join("&"));
    }





    function loadIframe (data) { 

        /*Show spinner*/
        var spinnerContainer = document.createElement('div');
        var spinner = document.createElement('div');
        spinnerContainer.setAttribute('class', 'spinner-container');
        spinnerContainer.setAttribute('id', 'rve_spinner_container_0999');
        spinner.setAttribute('class', 'spinner');
        spinnerContainer.appendChild(spinner);
        document.body.appendChild(spinnerContainer);

        var pageStyle = document.createElement('style');
        if(pageStyle)
        {
        pageStyle.appendChild( document.createTextNode('.spinner-container{height:100%;width:100%;position:fixed;top:0;left:0;background-color:rgba(0,0,0,.75); z-index:999}.spinner{width:40px;height:40px;margin-top:-20px; margin-left:-20px; position:fixed; top:50%; left:50%; background-color:#fff;border-radius:100%;-webkit-animation:sk-scaleout 1s infinite ease-in-out;animation:sk-scaleout 1s infinite ease-in-out}@-webkit-keyframes sk-scaleout{0%{-webkit-transform:scale(0)}100%{-webkit-transform:scale(1);opacity:0}}@keyframes sk-scaleout{0%{-webkit-transform:scale(0);transform:scale(0)}100%{-webkit-transform:scale(1);transform:scale(1);opacity:0}}') ); 
        document.getElementsByTagName('head')[0].appendChild(pageStyle);
        }


        if(data.loadtimeout){
            handleLoadTimeout(data.onloadtimeout, data.loadtimeout);
        }

    	globalConfigData = data;
    	var getpaidiframe = document.createElement('iframe');
    	getpaidiframe.setAttribute('style', 'position:fixed; top:0; left:0; z-index:2147483647; border:none;');
    	getpaidiframe.setAttribute('allowTransparency', 'true');
    	getpaidiframe.setAttribute('width', '100%');
    	getpaidiframe.setAttribute('height', '100%');  
    	getpaidiframe.setAttribute('id', 'flwpugpaidid'); 

        //this inadvertently strips all functions, the inner stringify that is. Accidental genius maybe?
    	var _data = JSON.parse( JSON.stringify( data) ); 

    	delete _data.callback;  //callback is not required as a query string to pass
    	delete _data.onclose;   //onclose is not required as a query string to pass
    	delete _data.onpaymentinit; 
    	delete _data.onvalidateotpinit;
        delete _data.meta;
        //delete _data.onintegritycheck;

        _data.init_url = encodeURIComponent(window.location.href);

    	getpaidiframe.src = 'flw-pms-dev.eu-west-1.elasticbeanstalk.com/flwv3-pug/getpaidx/api/pbfui?' + generateQueryString(_data);
    	 
        document.body.appendChild(getpaidiframe);
       
        getpaidiframe.onload = function (){ 
           
        }
    }

    function extractAttributes(element, attributes) {
    	var obj = {};
    	attributes
    		.forEach( function (attrib){
    			var aa = element.getAttribute('data-'+attrib);
    			if(aa)
    			obj[attrib] = aa;
    		});
    	return obj;
    }

    function extractMetaInfo(element) {
        var attributes = element.attributes;
        var atrlen = attributes.length;
        var metas = [];
        for(var x = 0; x < atrlen; x++)
        {
            var attrib = attributes[x];
            if(attrib.name.match(/^data-meta-/)){
                metas.push(
                    {
                        metaname:attrib.name.replace('data-meta-', ''),
                        metavalue:attrib.value
                    }
                );
            }
        }

        //=== Handle sideffects\\
        x = null;
        atrlen = null;
        //======================\\
        return metas
    }

    var anchors = document.querySelectorAll('.flwpug_getpaid');

    var anlen = anchors.length;
    if (anlen) {


         for (var i = 0; i < anlen; i++) {




             var ahref = anchors[i];
             if (ahref) {
                 var iframeData = {};
                 iframeData = extractAttributes(ahref, ['PBFPubKey', 'txref', 'amount', 'customer_email',
                     'customer_phone', 'customer_lastname', 'customer_firstname', 'currency', 'country',
                     'customer_fullname', 'callback', 'onclose', 'onvalidateotpinit',
                     'onpaymentinit', 'redirect_url', 'pay_button_text', 'custom_title', 'custom_description',
                     'custom_logo', 'default_account', 'payment_method', 'exclude_banks', 'settlement_token',
                     'recurring_stop', 'integrity_hash', 'redirect_post', 'redirect_no_json', 'payment_page', 'payment_plan', 'campaign_id'
                 ]);

                 //globalMeta = extractMetaInfo(ahref);
                 iframeData.meta = extractMetaInfo(ahref);

                 var paybutton = document.createElement('button');
                 paybutton.innerText = iframeData.pay_button_text || "PAY NOW";
                 ahref.innerText = "";

                 paybutton.setAttribute('style', 'color:#fff;background-color:#0a2740;border-color:#142a3e;/*padding:10px;*/display:inline-block;padding:6px12px;margin-bottom:0;font-size:14px;font-weight:400;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:none;border:1pxsolidtransparent;border-radius:4px;');

                 paybutton.setAttribute('type', 'button');

                 paybutton.addEventListener('click', function(e) {

                     window.getpaidSetup(iframeData);

                 });
                 ahref.appendChild(paybutton);
             }




         }



     }

  
  

    window.getpaidSetup = function (config) {

        globalButtonClicked = Date.now();
        if(config.hosted_payment == 1 && !config.is_hosted_page){

            var form = document.createElement('form');
            form.setAttribute('method', 'POST');
            //form.setAttribute('target', '_blank');
            form.setAttribute('action', 'http://flw-pms-dev.eu-west-1.elasticbeanstalk.com/flwv3-pug/getpaidx/api/hosted/pay');
            for(var c in config){

                if(c == 'meta'){

                    config[c].forEach( function(m, mi) {

                    var i =  document.createElement('input');
                i.setAttribute('type', 'hidden');
                i.setAttribute('name', c+'['+mi+'][metaname]');
                i.setAttribute('value', m.metaname);
                form.appendChild(i);
                var i =  document.createElement('input');
                i.setAttribute('type', 'hidden');
                i.setAttribute('name', c+'['+mi+'][metavalue]');
                i.setAttribute('value', m.metavalue);
                form.appendChild(i);

                    })

                }else{   
                if(!~["string", "number", "boolean"].indexOf(typeof config[c])) continue;
                var i =  document.createElement('input');
                i.setAttribute('type', 'hidden');
                i.setAttribute('name', c);
                i.setAttribute('value', config[c]);
                form.appendChild(i);}
            } 
            document.body.appendChild(form);
            form.submit();
             return;

        }

        globalIsHostedPage = config.is_hosted_page;
        delete config.is_hosted_page;
        globalMeta = config.meta;
    	loadIframe (config);
        return {
            close:globalClosePopup
        }
    }

  //});
})(window);

