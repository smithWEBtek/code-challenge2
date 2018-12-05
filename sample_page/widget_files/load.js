

if (typeof _tb_dis === 'undefined' || _tb_dis === null) {
    var _tb_dis = false;
}
if (!_tb_dis) {
    var pm_ppy = "tribunedigital-network";

    var _pmep = '//widget.perfectmarket.com/';
    var _pmep_geo = '//geo.perfectmarket.com/';
    if (document.URL.indexOf('https://') > -1) {
        _pmep = _pmep.replace(/88\//gi, '90/');
        _pmep_geo = _pmep_geo.replace(/88\//gi, '90/');
    }
    var _pmpmk = pm_ppy + '/pmk-201827005.13.js';
    var _pmasync = true;
    var _pmoptimization = true;
    var _pmoptimizationmanipulation = true;
    var _pmhp = false;
    var _pmsb = false;

    function _pmloadfile(fileName) {

        if (_pmasync) {
            var js, elements = document.getElementsByTagName("head")[0];
            js = document.createElement("script");
            js.setAttribute("type", "text/javascript");
            js.setAttribute("src", fileName);
            js.setAttribute('async','');
            elements.appendChild(js);
        } else {
            document.writeln('<script src=' + fileName + '></script>');
        }
    }

    var pmk, pmglb, pmfa, pmad, pmdebug_c;
    pmglb = pmglb || null;
    pmfa = pmfa || null;
    pmad = pmad || null;
    pmdebug_c = pmdebug_c || null;
    pmk = pmk || null;
    var _pmenv = _tb_getUrlParameter('pmenv');
    //pm async
    var _pma = _tb_getUrlParameter('_pma');
    if (_pma == true) {
        _pmasync = true;
    }

    if (_pmenv && _pmenv == 'sandbox' && !_pmsb) {

        _pmep = '//widget.sandbox.perfectmarket.com/';
        _pmep_geo = '//geo.sandbox.perfectmarket.com/';
        var _tb_d = new Date();
        var _tb_rand = _tb_d.getTime();
        _pmpmk = pm_ppy + "/load.js?" + _tb_rand;
    }

    (function () {
        var sc = 'script', doc = document;
        _pmloadfile(_pmep + _pmpmk);
    })();
    function pmws_request_done() {
        var sc = "script", doc = document;
        if (doc.all && !window.opera) {
            doc.write('<' + sc + ' type="text/javascript" id="pm_contentloadtag" defer="defer" src="javascript:void(0)"><\/' + sc + '>');
            var pm_contentloadtag = doc.getElementById("pm_contentloadtag");
            if (pm_contentloadtag)pm_contentloadtag.onreadystatechange = function () {
                if (this.readyState == "complete") return;
            }
        }
        _pmloadfile(_pmep + _pmpmk);
    }


    function _tb_getUrlParameter(name) {
        var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
        return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    }


     /** Generated CJS **/ if (window.location.href.indexOf('articles.chicagotribune.com') > 0) {
    var _tb_noBC = true;
    var _tb_noKP = true;
    var _tb_noOP = true;
    var _tb_noJP = true;
    _tb_ext_xp = {
        'facebook': [{
            'xpath': "//li[contains(@class, 'facebookRecommendCompact')] | //li[contains(@class, 'facebook')]",
            'attr': 'class'
        }],
        'twitter': [{
            'xpath': "//li[contains(@class, 'twitterCompact')] | //li[contains(@class, 'twitter')]",
            'attr': 'class'
        }]
    };

    var _pm_ecd = {
        'at': ".//div[contains(@class, 'mod-articlebyline')]//span[contains(@class, 'separator')]//following-sibling::span[1]",
        'sr': ".*articles.chicagotribune.com\\/.*\\/(\\w+)\\/",
        'ablw': ['From', ',', '|', '.']
    };
} else {
    var _pm_ecd = {
        'hd': "//div[contains(@class, 'card-content')]//h1",
        'sx': "//a[@itemprop='articleSection'] | //ul[contains(@class, 'tag-list-wrapper')]//li//a[contains(@class, 'tag-solid tag-first')]",
        'ax': "(//div[@class='trb_allContentWrapper']/article//a[@itemprop='author']|//div[@class='trb_allContentWrapper']/article//span[@itemprop='author']) | //meta[@name='author']/@content"
    };

    _tb_noBC = true;
    _tb_noOP = true;
    _tb_vautop = false;

    var _tb_vpx = [{
        xpath: "//div[contains(@class, 'trb_video_embeddedvideo')]",
        attr: "div"
    }, {
        xpath: "//div[contains(@class, 'video_container')]//object",
        attr: "div"
    }];

    _tb_ext_xp = {
        'facebook': [{
            'xpath': "//span[contains(@data-sc-t, 'facebook')]",
            'attr': 'class'
        },{
            'xpath': "//span[contains(@class, 'sharebar align-right flex')]//i[contains(@class, 'facebook')]",
            'attr': 'class'
        }],
        'twitter': [{
            'xpath': "//span[contains(@data-sc-t, 'twitter')]",
            'attr': 'class'
        }]
    };
}/** Generated CJS end **/ 
}