// Proxy Auto-Configuration (PAC) File for Ad-Blocking and ProxyNova Routing
// Blocks ads using a null proxy and routes non-blocked traffic through ProxyNova US proxies
// Author: Gorstak (ad-blocking), adapted for ProxyNova

// Configuration Variables
var blackhole = "PROXY 127.0.0.1:65535"; // Null proxy for ads
var proxies = ["192.155.89.77:8080", "68.71.76.242:8082"]; // REPLACE with real US proxies from https://www.proxynova.com/proxy-server-list/
var isEnabled = 1;                      // Ad-blocking toggle (1 = enabled)
var debug = 1;                          // Debugging flag (1 = enabled)

// Whitelist: Domains allowed, routed through proxy
var whitelist = [
    "twitter.com",
    "x.com",
    "perplexity.ai",
    "mediafire.com",
    "apple.com",
    "schooner.com",
    "citibank.com",
    "ebay.com",
    "yahoo.com",
    "discord.com",
    "click.discord.com",
    "discordapp.com",
    "cdn.discordapp.com",
    "cdn.discord.app",
    "discord.gg",
    "discord.media",
    "discordapp.net",
    "media.discordapp.net",
    "discordstatus.com",
    "dis.gd",
    "discordcdn.com",
    "aliexpress.com",
    "tenor.com",
    "media.tenor.com",
    "google.com",
    "www.google.com",
    "youtube.com",
    "www.youtube.com",
    "wikipedia.org",
    "www.wikipedia.org",
    "example.com"
];

// Ad-Blocking Regular Expressions and Blacklist
var adDomainRegex = /^(?:.*[-_.])?(ads?|adv(ert(s|ising)?)?|banners?|track(er|ing|s)?|beacons?|doubleclick|adservice|adnxs|adtech|googleads|gads|adwords|partner|sponsor(ed)?|click(s|bank|tale|through)?|pop(up|under)s?|promo(tion)?|market(ing|er)?|affiliates?|metrics?|stat(s|counter|istics)?|analytics?|pixel(s)?|campaign|traff(ic|iq)|monetize|syndicat(e|ion)|revenue|yield|impress(ion)?s?|conver(sion|t)?|audience|target(ing)?|behavior|profil(e|ing)|telemetry|survey|poll|outbrain|taboola|quantcast|scorecard|omniture|comscore|krux|bluekai|exelate|adform|adroll|rubicon|vungle|inmobi|flurry|mixpanel|heap|amplitude|optimizely|bizible|pardot|hubspot|marketo|eloqua|salesforce|media(math|net)|criteo|appnexus|turn|adbrite|admob|adsonar|adscale|zergnet|revcontent|mgid|nativeads|contentad|displayads|bannerflow|adblade|adcolony|chartbeat|newrelic|pingdom|gauges|kissmetrics|webtrends|tradedesk|bidder|auction|rtb|programmatic|splash|interstitial|overlay|adpush|adnetwork|adexchange|adclick|adserving)\./i;
var adUrlRegex = /(?:\/(?:adcontent|img\/adv|web\-ad|iframead|contentad|ad\/image|video\-ad|stats\/event|xtclicks|adscript|bannerad|googlead|adhandler|adimages|embed\-log|adconfig|tracking\/track|tracker\/track|adrequest|nativead|adman|advertisement|adframe|adcontrol|adoverlay|adserver|adsense|google\-ads|ad\-banner|banner\-ad|campaign\/advertiser|adplacement|adblockdetect|advertising|admanagement|adprovider|adrotation|adtop|adbottom|adleft|adright|admiddle|adlarge|adsmall|admicro|adunit|adcall|adlog|adcount|adserve|adsrv|adsys|adtrack|adview|adwidget|adzone|banner\/adv|google_tag|image\/ads|sidebar\-ads|footer\-ads|top\-ads|bottom\-ads|new\-ads|search\-ads|lazy\-ads|responsive\-ads|dynamic\/ads|external\/ads|mobile\-ads|house\-ads|blog\/ads|online\/ads|pc\/ads|left\-ads|right\-ads|ads\/square|ads\/text|ads\/html|ads\/js|ads\.php|ad\.js|ad\.css|\?affiliate=|\?advertiser=|\&adspace=|\&adserver=|\&adgroupid=|\&adpageurl=|\.adserve|\.ads\d|\.adspace|\.adsense|\.adserver|\.google\-ads|\.banner\-ad|\.ad\-banner|\.adplacement|\.advertising|\.admanagement|\.adprovider|\.adrotation|\.adtop|\.adbottom|\.adleft|\.adright|\.admiddle|\.adlarge|\.adsmall|\.admicro|\.adunit|\.adcall|\.adlog|\.adcount|\.adserve|\.adsrv|\.adsys|\.adtrack|\.adview|\.adwidget|\.adzone|\/ads\/|\/ad\/|\/promo\/|\/sponsored\/))/i;
var adSubdomainRegex = /^(?:adcreative(s)?|imageserv|media(mgr)?|stats|switch|track(2|er)?|view|ad(s)?\d{0,3}|banner(s)?\d{0,3}|click(s)?\d{0,3}|count(er)?\d{0,3}|servedby\d{0,3}|toolbar\d{0,3}|pageads\d{0,3}|pops\d{0,3}|promos\d{0,3}|adserver|adsrv|adpush)\./i;
var adWebBugRegex = /(?:\/(?:1|blank|b|clear|pixel|transp|spacer)\.gif|\.swf|\.js\?ad=|\.jpg\?ad=|\.png\?ad=)$/i;
var blacklist = [
    "doubleclick.net",
    "googlesyndication.com",
    "googleadservices.com",
    "adserver.com",
    "fastclick.com",
    "adnxs.com",
    "adtech.com",
    "advertising.com",
    "atdmt.com",
    "quantserve.com",
    "omniture.com",
    "comscore.com",
    "scorecardresearch.com",
    "chartbeat.com",
    "newrelic.com",
    "pingdom.com",
    "kissmetrics.com",
    "webtrends.com",
    "tradedesk.com",
    "criteo.com",
    "appnexus.com",
    "turn.com",
    "adbrite.com",
    "admob.com",
    "adsonar.com",
    "adscale.com",
    "zergnet.com",
    "revcontent.com",
    "mgid.com",
    "nativeads.com",
    "contentad.com",
    "displayads.com",
    "bannerflow.com",
    "adblade.com",
    "adcolony.com",
    "outbrain.com",
    "taboola.com",
    "quantcast.com",
    "krux.com",
    "bluekai.com",
    "exelate.com",
    "adform.com",
    "adroll.com",
    "rubiconproject.com",
    "vungle.com",
    "inmobi.com",
    "flurry.com",
    "mixpanel.com",
    "heap.io",
    "amplitude.com",
    "optimizely.com",
    "bizible.com",
    "pardot.com",
    "hubspot.com",
    "marketo.com",
    "eloqua.com",
    "salesforce.com",
    "media.net",
    "ads.google.com",
    "tpc.googlesyndication.com",
    "pagead2.googlesyndication.com",
    "ad.doubleclick.net",
    "securepubads.g.doubleclick.net",
    "pubads.g.doubleclick.net",
    "adserver.adtech.de",
    "adserver.adtechus.com",
    "adsafeprotected.com",
    "moatads.com",
    "serving-sys.com",
    "openx.net",
    "pubmatic.com",
    "indexww.com",
    "smartadserver.com",
    "adpushup.com",
    "adentifi.com",
    "infolinks.com",
    "bidswitch.net",
    "contextweb.com",
    "lijit.com",
    "sharethrough.com",
    "sovrn.com",
    "gumgum.com",
    "teads.tv",
    "yieldmo.com",
    "kargo.com",
    "adform.net",
    "rtbhouse.com",
    "criteo.net",
    "amazon-adsystem.com",
    "adsrvr.org"
];

// Proxy Selection Functions
function atoi(char) {
    if (char == 'a') return 0x61;
    if (char == 'b') return 0x62;
    if (char == 'c') return 0x63;
    if (char == 'd') return 0x64;
    if (char == 'e') return 0x65;
    if (char == 'f') return 0x66;
    if (char == 'g') return 0x67;
    if (char == 'h') return 0x68;
    if (char == 'i') return 0x69;
    if (char == 'j') return 0x6a;
    if (char == 'k') return 0x6b;
    if (char == 'l') return 0x6c;
    if (char == 'm') return 0x6d;
    if (char == 'n') return 0x6e;
    if (char == 'o') return 0x6f;
    if (char == 'p') return 0x70;
    if (char == 'q') return 0x71;
    if (char == 'r') return 0x72;
    if (char == 's') return 0x73;
    if (char == 't') return 0x74;
    if (char == 'u') return 0x75;
    if (char == 'v') return 0x76;
    if (char == 'w') return 0x77;
    if (char == 'x') return 0x78;
    if (char == 'y') return 0x79;
    if (char == 'z') return 0x7a;
    if (char == '0') return 0x30;
    if (char == '1') return 0x31;
    if (char == '2') return 0x32;
    if (char == '3') return 0x33;
    if (char == '4') return 0x34;
    if (char == '5') return 0x35;
    if (char == '6') return 0x36;
    if (char == '7') return 0x37;
    if (char == '8') return 0x38;
    if (char == '9') return 0x39;
    if (char == '.') return 0x2e;
    return 0x20;
}

function hostHash(host) {
    var hash = 0;
    var lowerHost = host.toLowerCase();
    if (lowerHost.length == 0) return hash;
    for (var i = 0; i < lowerHost.length; i++) {
        var charCode = atoi(lowerHost.substring(i, i + 1));
        hash = hash + charCode;
    }
    return hash;
}

// Main Proxy Auto-Configuration Function
function FindProxyForURL(url, host) {
    // Convert inputs to lowercase
    host = host.toLowerCase();
    url = url.toLowerCase();

    // Debugging
    if (debug) {
        alert("Checking...\nURL: " + url + "\nHost: " + host);
    }

    // Toggle ad-blocking
    if (host === "antiad.on") {
        isEnabled = 1;
        if (debug) alert("Ad-blocking enabled");
        return blackhole;
    } else if (host === "antiad.off") {
        isEnabled = 0;
        if (debug) alert("Ad-blocking disabled");
        return blackhole;
    }

    // If ad-blocking disabled, route through proxy
    if (!isEnabled) {
        if (debug) alert("Ad-blocking disabled, routing through proxy\nURL: " + url + "\nHost: " + host);
        var hash = hostHash(host);
        var index = hash % proxies.length;
        var selectedProxy = proxies[index];
        var alternateProxy = proxies[(index + 1) % proxies.length];
        return "PROXY " + selectedProxy + "; PROXY " + alternateProxy + "; DIRECT";
    }

    // Local network bypass
    if (isPlainHostName(host) ||
        shExpMatch(host, "10.*") ||
        shExpMatch(host, "172.16.*") ||
        shExpMatch(host, "192.168.*") ||
        shExpMatch(host, "127.*") ||
        dnsDomainIs(host, ".local")) {
        if (debug) alert("Local network bypass, using DIRECT\nURL: " + url + "\nHost: " + host);
        return "DIRECT";
    }

    // Whitelist check
    for (var i = 0; i < whitelist.length; i++) {
        if (shExpMatch(host, whitelist[i])) {
            if (debug) alert("Whitelisted: " + host + "\nURL: " + url + "\nRouting through proxy");
            var hash = hostHash(host);
            var index = hash % proxies.length;
            var selectedProxy = proxies[index];
            var alternateProxy = proxies[(index + 1) % proxies.length];
            return "PROXY " + selectedProxy + "; PROXY " + alternateProxy + "; DIRECT";
        }
    }

    // Ad-blocking logic
    var blockReason = "";
    if (adDomainRegex.test(host)) {
        blockReason = "Matched adDomainRegex: " + host;
    } else if (adUrlRegex.test(url)) {
        blockReason = "Matched adUrlRegex: " + url;
    } else if (adSubdomainRegex.test(host)) {
        blockReason = "Matched adSubdomainRegex: " + host;
    } else if (adWebBugRegex.test(url)) {
        blockReason = "Matched adWebBugRegex: " + url;
    } else if (blacklist.indexOf(host) !== -1) {
        blockReason = "Matched blacklist: " + host;
    }

    if (blockReason) {
        if (debug) alert("Blocked...\nReason: " + blockReason + "\nURL: " + url + "\nHost: " + host);
        return blackhole;
    }

    // Default: Route non-blocked traffic through proxy
    if (debug) alert("Not Blocked, routing through proxy\nURL: " + url + "\nHost: " + host);
    var hash = hostHash(host);
    var index = hash % proxies.length;
    var selectedProxy = proxies[index];
    var alternateProxy = proxies[(index + 1) % proxies.length];
    return "PROXY " + selectedProxy + "; PROXY " + alternateProxy + "; DIRECT";
}

// Initial load notification
if (debug) {
    alert("PAC file loaded, isEnabled = " + isEnabled);
}