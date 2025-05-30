// Updated Proxy Auto-Configuration (PAC) File
// Focuses on reliable ad-blocking with safe defaults
// Author: Gorstak (ad-blocking), adapted for reliability

// Configuration Variables
var normal = "DIRECT";                  // Default pass-through for non-blocked traffic
var blackhole = "PROXY 0.0.0.0:0";     // Null proxy to drop ad traffic (no server required)
var isEnabled = 1;                      // Toggle for enabling/disabling ad-blocking (1 = enabled)
var debug = 1;                          // Debugging flag (1 = enabled for troubleshooting)

// Whitelist: Domains explicitly allowed, bypassing all filters
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
    "google.com",        // Essential for search
    "www.google.com",
    "example.com"       // Add any other critical domains
];

// Comprehensive Regular Expression for Ad/Tracking Domains and Subdomains
var adDomainRegex = /^(?:.*[-_.])?(ads?|adv(ert(s|ising)?)?|banners?|track(er|ing|s)?|beacons?|doubleclick|adservice|adnxs|adtech|googleads|gads|adwords|partner|sponsor(ed)?|click(s|bank|tale|through)?|pop(up|under)s?|promo(tion)?|market(ing|er)?|affiliates?|metrics?|stat(s|counter|istics)?|analytics?|pixel(s)?|campaign|traff(ic|iq)|monetize|syndicat(e|ion)|revenue|yield|impress(ion)?s?|conver(sion|t)?|audience|target(ing)?|behavior|profil(e|ing)|telemetry|survey|poll|outbrain|taboola|quantcast|scorecard|omniture|comscore|krux|bluekai|exelate|adform|adroll|rubicon|vungle|inmobi|flurry|mixpanel|heap|amplitude|optimizely|bizible|pardot|hubspot|marketo|eloqua|salesforce|media(math|net)|criteo|appnexus|turn|adbrite|admob|adsonar|adscale|zergnet|revcontent|mgid|nativeads|contentad|displayads|bannerflow|adblade|adcolony|chartbeat|newrelic|pingdom|gauges|kissmetrics|webtrends|tradedesk|bidder|auction|rtb|programmatic|splash|interstitial|overlay)\./i;

// Regular Expression for Ad-Related URL Patterns
var adUrlRegex = /(?:\/(?:adcontent|img\/adv|web\-ad|iframead|contentad|ad\/image|video\-ad|stats\/event|xtclicks|adscript|bannerad|googlead|adhandler|adimages|embed\-log|adconfig|tracking\/track|tracker\/track|adrequest|nativead|adman|advertisement|adframe|adcontrol|adoverlay|adserver|adsense|google\-ads|ad\-banner|banner\-ad|campaign\/advertiser|adplacement|adblockdetect|advertising|admanagement|adprovider|adrotation|adtop|adbottom|adleft|adright|admiddle|adlarge|adsmall|admicro|adunit|adcall|adlog|adcount|adserve|adsrv|adsys|adtrack|adview|adwidget|adzone|banner\/adv|google_tag|image\/ads|sidebar\-ads|footer\-ads|top\-ads|bottom\-ads|new\-ads|search\-ads|lazy\-ads|responsive\-ads|dynamic\/ads|external\/ads|mobile\-ads|house\-ads|blog\/ads|online\/ads|pc\/ads|left\-ads|right\-ads|ads\/square|ads\/text|ads\/html|ads\/js|ads\.php|ad\.js|ad\.css|\?affiliate=|\?advertiser=|\&adspace=|\&adserver=|\&adgroupid=|\&adpageurl=|\.adserve|\.ads\d|\.adspace|\.adsense|\.adserver|\.google\-ads|\.banner\-ad|\.ad\-banner|\.adplacement|\.advertising|\.admanagement|\.adprovider|\.adrotation|\.adtop|\.adbottom|\.adleft|\.adright|\.admiddle|\.adlarge|\.adsmall|\.admicro|\.adunit|\.adcall|\.adlog|\.adcount|\.adserve|\.adsrv|\.adsys|\.adtrack|\.adview|\.adwidget|\.adzone))/i;

// Regular Expression for Common Ad Subdomains
var adSubdomainRegex = /^(?:adcreative(s)?|imageserv|media(mgr)?|stats|switch|track(2|er)?|view|ad(s)?\d{0,3}|banner(s)?\d{0,3}|click(s)?\d{0,3}|count(er)?\d{0,3}|servedby\d{0,3}|toolbar\d{0,3}|pageads\d{0,3}|pops\d{0,3}|promos\d{0,3})\./i;

// Regular Expression for Web Bugs and Flash Ads
var adWebBugRegex = /(?:\/(?:1|blank|b|clear|pixel|transp|spacer)\.gif|\.swf)$/i;

// Blacklist: Explicitly blocked domains (updated with modern ad networks)
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
    "ads.google.com",    // Added for Google Ads
    "tpc.googlesyndication.com",
    "pagead2.googlesyndication.com",
    "ad.doubleclick.net",
    "securepubads.g.doubleclick.net",
    "pubads.g.doubleclick.net",
    "adserver.adtech.de",
    "adserver.adtechus.com",
    "adsafeprotected.com", // Modern ad verification
    "moatads.com",         // Ad analytics
    "serving-sys.com",     // Sizmek ad platform
    "openx.net",           // OpenX ad exchange
    "pubmatic.com",        // PubMatic ad platform
    "indexww.com",         // Index Exchange
    "smartadserver.com"    // Smart AdServer
];

// Main Proxy Auto-Configuration Function
function FindProxyForURL(url, host) {
    // Convert inputs to lowercase for case-insensitive matching
    host = host.toLowerCase();
    url = url.toLowerCase();

    // Debugging output (if enabled)
    if (debug) {
        alert("Checking...\nURL: " + url + "\nHost: " + host);
    }

    // Toggle ad-blocking on/off via special URLs
    if (host === "antiad.on") {
        isEnabled = 1;
        if (debug) alert("Ad-blocking enabled");
        return blackhole;
    } else if (host === "antiad.off") {
        isEnabled = 0;
        if (debug) alert("Ad-blocking disabled");
        return blackhole;
    }

    // If ad-blocking is disabled, pass all traffic
    if (!isEnabled) {
        if (debug) alert("Ad-blocking disabled, using DIRECT\nURL: " + url + "\nHost: " + host);
        return normal;
    }

    // Local network bypass (e.g., LAN, loopback)
    if (isPlainHostName(host) ||
        shExpMatch(host, "10.*") ||
        shExpMatch(host, "172.16.*") ||
        shExpMatch(host, "192.168.*") ||
        shExpMatch(host, "127.*") ||
        dnsDomainIs(host, ".local")) {
        if (debug) alert("Local network bypass, using DIRECT\nURL: " + url + "\nHost: " + host);
        return normal;
    }

    // Whitelist check: Allow explicitly whitelisted domains
    for (var i = 0; i < whitelist.length; i++) {
        if (shExpMatch(host, whitelist[i])) {
            if (debug) alert("Whitelisted: " + host + "\nURL: " + url);
            return normal;
        }
    }

    // Ad-blocking logic with detailed debugging
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

    // Default: Pass through all non-matching traffic
    if (debug) alert("Not Blocked, using DIRECT\nURL: " + url + "\nHost: " + host);
    return normal;
}

// Initial load notification (if debugging is enabled)
if (debug) {
    alert("Updated PAC file loaded, isEnabled = " + isEnabled);
}