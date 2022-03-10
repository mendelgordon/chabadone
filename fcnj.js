String.prototype.replaceAll = function (find, replace) {
    var str = this;
    return str.replace(new RegExp(find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), replace);
};


function getPageRedirect(aid) {
    var pages = {

        // Home
        "3841332": "/",

        // About
        "445654": "about",
        "97305": "about",
        "447411": "about/mission-and-vision",
        "54973": "about/how-you-can-help",
        "468654": "about/worldwide-fc-locations",
        "705677": "about/newsletters",
        "446970": "contact",

        // Programs
        "54950": "programs",
        "1957674": "programs",

        // Parents
        "445674": "families",
        "54974": "families/forming-the-circle/",
        "90905": "register",
        "445679": "programs",
        "445688": "calendar",

        // Media
        "445652": "media",

        // Volunteers
        "445659": "volunteers",
        "54954": "volunteers/getting-started",
        "726399": "volunteers/register",
        "2571263": "programs/volunteers",
        "1110567": "volunteers/mitzvah-volunteer-program",
        "99504": "volunteers/presidents",
        "543401": "volunteers/presidents/presidents-form",
        "2561182": "volunteers/volunteer-celebration/",
        "2561195": "volunteers/volunteer-celebration/rsvp",

        // Donate
        "1226400": "donate",
        "3354162": "donate",
        "3489089": "donate",
        "594235": "donate",
        "1226401": "donate/tribute-cards",
        "1226402": "donate/donate-in-kind",
        "1270644": "donate/securities-wills",
        "1230152": "donate/mail",
        "2145383": "https://www.lifetown.com/giving/",

        // calendar
        "6224": "calendar",
        "384848": "calendar",
        "384847": "calendar",
        "384846": "calendar",
        "384845": "calendar",
    }

    if (aid) {
        if (typeof pages[aid] != undefined) return pages[aid];
    }
}

function redirectCurrentPage() {
    var base = "https://fcnj.com/";
    var aid = getArticleId();
    var page = getPageRedirect(aid);

    if (page) window.location.href = base + page;
}


function getParentPageForId(sectionId) {
    var sections = {
        "445659": 'volunteer',
        "1776183": 'families',
        "132514": 'families',
        "785089": 'inspiration',
        "1675887": 'inspiration',
        "1675888": 'inspiration',
        "313386": 'inspiration',
        "313387": 'inspiration',
        "290119": 'inspiration',
        "313391": 'inspiration',
        "60286": 'inspiration',
        "60771": 'inspiration',
        "67250": 'inspiration',
        "577994": 'inspiration',
        "445654": 'about',
        "445652": 'media',
    }



    if (sectionId) {
        var section = sections[sectionId];

        if (typeof section != undefined && section) {
            return section;

        }
    }

    return '';
}

function getParentPage() {
    var sectionId = getSectionId();
    return getParentPageForId(sectionId);
}

function copyBreadcrumbs() {

}

function pageTitleFilter(title) {

    if (title.indexOf("The Lubavitcher Rebbe, Rabbi Menachem Mendel Schneerson, of righteous memory") > -1)
    return 'The Lubavitcher Rebbe';

    return title;
}

function getArticleId() {
    if (typeof Co === "undefined") {
        var url = window.location.pathname;
        var regex = /aid\/(.*?)\//m;
        var matches = url.match(regex);
        var id = '';

        if(matches && matches[1]) {
            id = matches[1];
        }
        console.log(id);
        return id;
    } else {
        return Co.ArticleId;
    }
}
getArticleId();

function getSectionId() {
    if (typeof Co === "undefined") return '';
    return Co.SectionId;
}

function checkNoSidebar(sectionId) {
    if (sectionId == "60286") return true;

    return false;
}

function loadSiteFrame() {

    var localCache = {
        /**
        * timeout for cache in millis
        * @type {number}
        */
        timeout: 3.456e+8,
        /** 
        * @type {{_: number, data: {}}}
        **/
        data: {},
        setLocalStorage: function(data) {
                
        },
        remove: function (url) {
            localStorage.removeItem[url];
        },
        exist: function (url) {
            try {
                var item = JSON.parse(localStorage.getItem(url));
                return !!item && ((new Date().getTime() - item._) < localCache
                    .timeout);
            } catch {
                return false;
            }
        },
        get: function (url) {
            try {
                return JSON.parse(localStorage.getItem(url)).data;
            } catch {
                localCache.remove(url);
                return "";
            }
        },
        set: function (url, cachedData, callback) {
            localCache.remove(url);
            var thisData = {
                _: new Date().getTime(),
                data: cachedData
            };
            localStorage.setItem(url, JSON.stringify(thisData));
            if (jQuery.isFunction(callback)) callback(cachedData);
        }
    };


    jQuery.ajaxPrefilter(function (options, originalOptions, jqXHR) {
        if (options.cache) {
            var complete = originalOptions.complete || jQuery.noop,
                url = originalOptions.url;
            //remove jQuery cache as we have our own localCache
            options.cache = false;
            options.beforeSend = function () {

                if (localCache.exist(url)) {
                    complete(localCache.get(url));
                    return false;
                }
                return true;
            };
            options.complete = function (data, textStatus) {
                localCache.set(url, data, complete);
            };
        }
    });



    var base = "https://fcnj.com/";

    var url = base + getParentPage() + '/chabadone';



    jQuery("base").remove();

    var articleId = getArticleId();
    var sectionId = getSectionId();


    if (checkNoSidebar(sectionId)) url += "nosidebar";

    url += "/";


    var title = jQuery("title").text();
    var pageTitle = title.split(" - ")[0];
    pageTitle = pageTitle.replace(
        "Friendship Circle | MetroWest New Jersey | Programs for Jewish Children and Teens with Autism and other Special Needs and the Teen Volunteers",
        "FCNJ");
    pageTitle = pageTitleFilter(pageTitle);

    //jQuery('head').append("<base href='"+base+"'>");


    jQuery("body").addClass("class",
        "chabadorg-site page-template-default page stretched helvetica-neue-websave _helvetica_neue");
    jQuery("html").addClass(
        "html_stretched responsive av-preloader-disabled av-default-lightbox  html_header_top html_logo_left html_main_nav_header html_menu_right html_slim html_header_sticky html_header_shrinking html_header_topbar_active html_mobile_menu_tablet html_disabled html_header_searchicon html_content_align_center html_header_unstick_top html_header_stretch_disabled html_entry_id_989 html_av_admin_bar_active av-no-preview html_av-submenu-hidden html_av-submenu-display-click html_av-overlay-side html_av-overlay-side-classic html_av-submenu-clone"
    );
    jQuery("body").attr("id", "top");


    //jQuery("body").addClass("js-site-transition");





    methodA = true;

    var lightbox = "";
    if (jQuery("#lightbox-wrapper").length > 0) lightbox = jQuery("#lightbox-wrapper").detach();

    if (methodA) {
        content = jQuery("#content .body_wrapper").find('script').remove().end();
        content = content.detach();

    } else {
        originalContent = jQuery("#content .body_wrapper")
        copiedContent = originalContent.clone();
    }




    /*jQuery("body").load(url + " #wrap_all", function (response, status, xhr) {

    });*/


    jQuery.ajax(
        {
            url: url,
            cache: true,
            dataType: "html",
            complete: function (data, status) {

                var x = document.createElement('div');
                x.innerHTML = data.responseText;


                jQuery("body").html(x.querySelector('#wrap_all').outerHTML);


                if (methodA) {
                    jQuery(".template-page.content .entry-content").html(content);
                } else {
                    originalContent.hide();
                    jQuery(".template-page.content .entry-content").html(copiedContent);
                }




                jQuery(".main-title").text(pageTitle);

                if (jQuery(".full_back_title_container").css('background-image') != 'none') jQuery("body").addClass(
                    "header_image");

                jQuery("body").addClass("wp-loaded");
                jQuery("body").removeClass("js-site-transition");

                if (articleId) jQuery(".page_item > a[href='/" + articleId + "'],.page_item > a[href='" +
                    articleId + "']").closest(
                    ".page_item").addClass("current_page_item");

                jQuery("body").append(lightbox);

                jQuery(".sidebar_right .inner_sidebar").append(jQuery("#co_ads_container"));

                jQuery('.co_index .row:has(.item.right_column)').addClass('onecolumn');
                jQuery('.co_index .row:has(.item.left_column.last)').addClass('onecolumn');


                jQuery("img").each(function () {
                    var thisSrc = jQuery(this).attr("src")
                    if (typeof thisSrc != undefined && thisSrc && thisSrc.indexOf("http") == -1) {
                        jQuery(this).attr("src", base + thisSrc);
                    }
                });

                jQuery(".menu a, .nested_nav a").each(function () {
                    var thisLink = jQuery(this).attr("href")
                    if (typeof thisLink != undefined && thisLink && thisLink.indexOf("http") == -1) {
                        jQuery(this).attr("href", base + thisLink);
                    }
                });


                var s = document.createElement("script");
                s.type = "text/javascript";
                s.src = "https://cdn.jsdelivr.net/lodash/4.17.4/lodash.min.js?ver=4.8.3";
                // Use any selector
                jQuery("head").append(s);

                var s = document.createElement("script");
                s.type = "text/javascript";
                s.src = "https://fcnj.com/wp-content/themes/fcnj/js/remote.js?ver=2.1";
                // Use any selector
                jQuery("body").append(s);


                var s = document.createElement("script");
                s.type = "text/javascript";
                s.src = "https://cdn.userway.org/widget.js";
                // Use any selector
                jQuery("body").append(s);

            }
        }
    )
}

jQuery(window).load(function () {
    if (window.location.href.indexOf("override") == -1 && window.location.href.indexOf("plainBody_cdo") == -
        1 && window.location.href.indexOf("templates/fundraising/default_cdo") == -1) {

        var articleId = getArticleId();
        var sectionId = getSectionId();

        var isKidsSection = false;
        if (articleId == "334370" || sectionId == "354788") isKidsSection = true;

        var isOverridePage = false;
        if (articleId == "4812030") isOverridePage = true;

        if (isKidsSection) {
            jQuery("#general-style").remove();
            jQuery("body").addClass("kids-site");
        } else if(isOverridePage) {
            jQuery("#general-style").remove();
            jQuery("body").addClass("override");
        } else {
            loadSiteFrame();
        }

    } else {
        jQuery("body").addClass("override");
    }


});

redirectCurrentPage()
jQuery(document).ready(function () {
    redirectCurrentPage()
});

if (window.location.href.indexOf("templates/fundraising/default_cdo") != -1) {
    jQuery("body").addClass("override");
    jQuery("#general-style").remove();
    jQuery(".fcnj-com-resource").remove();
}