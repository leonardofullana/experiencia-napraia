(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('begin', x, this);
                    k['call'](this);
                };
                w['bind']('begin', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['MainViewer'];
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['MainViewer']);
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R !== undefined) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var T = s != undefined ? S['getObjective'](s, r) : S['get'](r);
                                if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    T += 0x1;
                                return T;
                            } catch (U) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, V) {
        var W = {};
        W['player'] = player;
        W['playList'] = V;
        function X(a0) {
            for (var a1 = 0x0; a1 < a0['length']; ++a1) {
                var a2 = a0[a1];
                if ('id' in a2)
                    player[a2['id']] = a2;
            }
        }
        if (W['questions']) {
            X(W['questions']);
            for (var Y = 0x0; Y < W['questions']['length']; ++Y) {
                var Z = W['questions'][Y];
                X(Z['options']);
            }
        }
        if (W['objectives']) {
            X(W['objectives']);
        }
        if (W['califications']) {
            X(W['califications']);
        }
        if (W['score']) {
            player[W['score']['id']] = W['score'];
        }
        if (W['question']) {
            player[W['question']['id']] = W['question'];
        }
        if (W['timeout']) {
            player[W['timeout']['id']] = W['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return W;
    }
    var d = {"start":"this['MainViewer'] = this.MainViewer_mobile; this.init(); this.initGA()","borderRadius":0,"id":"rootPlayer","backgroundPreloadEnabled":true,"scrollBarVisible":"rollOver","mediaActivationMode":"window","paddingTop":0,"width":"100%","layout":"absolute","paddingLeft":0,"creationPolicy":"inAdvance","borderSize":0,"paddingBottom":0,"scrollBarColor":"#000000","children":["this.MainViewer_mobile","this.Container_8DF885B1_8669_6F1D_41DB_22383FCBF927_mobile"],"scrollBarWidth":10,"defaultVRPointer":"laser","scripts":{"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"quizShowScore":TDV.Tour.Script.quizShowScore,"mixObject":TDV.Tour.Script.mixObject,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"cloneCamera":TDV.Tour.Script.cloneCamera,"resumePlayers":TDV.Tour.Script.resumePlayers,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getPixels":TDV.Tour.Script.getPixels,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"init":TDV.Tour.Script.init,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getOverlays":TDV.Tour.Script.getOverlays,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"showWindow":TDV.Tour.Script.showWindow,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"initQuiz":TDV.Tour.Script.initQuiz,"setLocale":TDV.Tour.Script.setLocale,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getComponentByName":TDV.Tour.Script.getComponentByName,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"initGA":TDV.Tour.Script.initGA,"shareSocial":TDV.Tour.Script.shareSocial,"setValue":TDV.Tour.Script.setValue,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getMediaByName":TDV.Tour.Script.getMediaByName,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"showPopupImage":TDV.Tour.Script.showPopupImage,"quizStart":TDV.Tour.Script.quizStart,"historyGoForward":TDV.Tour.Script.historyGoForward,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"historyGoBack":TDV.Tour.Script.historyGoBack,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"quizFinish":TDV.Tour.Script.quizFinish,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"translate":TDV.Tour.Script.translate,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"playAudioList":TDV.Tour.Script.playAudioList,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setMapLocation":TDV.Tour.Script.setMapLocation,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"existsKey":TDV.Tour.Script.existsKey,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"registerKey":TDV.Tour.Script.registerKey,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getKey":TDV.Tour.Script.getKey,"unregisterKey":TDV.Tour.Script.unregisterKey,"openLink":TDV.Tour.Script.openLink,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer},"class":"Player","minHeight":20,"minWidth":20,"verticalAlign":"top","overflow":"hidden","shadow":false,"mobileMipmappingEnabled":false,"gap":10,"vrPolyfillScale":0.75,"contentOpaque":false,"height":"100%","toolTipHorizontalAlign":"center","definitions": [{"initialPosition":{"yaw":-59.79,"class":"PanoramaCameraPosition","pitch":-1.76},"class":"PanoramaCamera","initialSequence":"this.sequence_8FAE5E24_8667_7D3B_41C6_C971B193849D","automaticZoomSpeed":10,"id":"panorama_8C9F73BA_8667_2B0F_41C7_0270B09A22B6_camera"},{"clickAction":"play_pause","viewerArea":"this.MainViewer_mobile","class":"VideoPlayer","displayPlaybackBar":true,"displayPlayOverlay":true,"id":"MainViewer_mobileVideoPlayer"},{"height":1080,"label":trans('video_881DCF11_8667_3B1D_41CA_0690A3991A53.label'),"thumbnailUrl":"media/video_881DCF11_8667_3B1D_41CA_0690A3991A53_t.jpg","data":{"label":"ic_red-v5"},"width":1080,"loop":false,"id":"video_881DCF11_8667_3B1D_41CA_0690A3991A53","class":"Video","scaleMode":"fit_inside","video":{"width":858,"mp4Url":"media/video_881DCF11_8667_3B1D_41CA_0690A3991A53.mp4","class":"VideoResource","height":858}},{"duration":500,"easing":"linear","id":"effect_968F4876_8669_2507_41D9_2E76BD631618","class":"FadeInEffect"},{"label":trans('panorama_8C9F73BA_8667_2B0F_41C7_0270B09A22B6.label'),"id":"panorama_8C9F73BA_8667_2B0F_41C7_0270B09A22B6","pitch":0,"adjacentPanoramas":[{"panorama":"this.panorama_8FD303C7_8667_6B05_41DA_802850A8E3B6","class":"AdjacentPanorama","distance":1.18,"select":"this.mainPlayList.set('selectedIndex', 0)"}],"vfov":180,"frames":[{"cube":{"class":"ImageResource","levels":[{"url":"media/panorama_8C9F73BA_8667_2B0F_41C7_0270B09A22B6_0/{face}/0/{row}_{column}.jpg","colCount":18,"tags":"ondemand","class":"TiledImageResourceLevel","width":9216,"rowCount":3,"height":1536},{"url":"media/panorama_8C9F73BA_8667_2B0F_41C7_0270B09A22B6_0/{face}/1/{row}_{column}.jpg","colCount":12,"tags":"ondemand","class":"TiledImageResourceLevel","width":6144,"rowCount":2,"height":1024},{"url":"media/panorama_8C9F73BA_8667_2B0F_41C7_0270B09A22B6_0/{face}/2/{row}_{column}.jpg","colCount":6,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","width":3072,"rowCount":1,"height":512}]},"thumbnailUrl":"media/panorama_8C9F73BA_8667_2B0F_41C7_0270B09A22B6_t.jpg","class":"CubicPanoramaFrame"}],"hfovMin":"150%","overlays":["this.overlay_89B8A414_867F_2D04_41CC_1265AEE3FC67","this.overlay_96D4D3C6_8679_2B04_41D3_54C09B0824A0","this.overlay_948F73B5_8678_EB05_41C9_E676E5F79B0B","this.overlay_943C315A_8679_670C_41DC_6F4C2E90BA21","this.overlay_94F9657A_8669_2F0F_41D1_11F128BA5592"],"thumbnailUrl":"media/panorama_8C9F73BA_8667_2B0F_41C7_0270B09A22B6_t.jpg","data":{"label":"panoramica_camarim"},"class":"Panorama","partial":false,"hfovMax":130,"hfov":360},{"displayMovements":[{"duration":1000,"easing":"linear","class":"TargetRotationalCameraDisplayMovement"},{"duration":3000,"easing":"cubic_in_out","class":"TargetRotationalCameraDisplayMovement","targetPitch":-2.51,"targetStereographicFactor":0}],"initialPosition":{"yaw":-94.21,"class":"PanoramaCameraPosition","pitch":-2.51},"class":"PanoramaCamera","initialSequence":"this.sequence_8FAA9E26_8667_7D07_41C2_8223CBEF3583","displayOriginPosition":{"yaw":-94.21,"class":"RotationalCameraDisplayPosition","hfov":165,"pitch":-90,"stereographicFactor":1},"automaticZoomSpeed":10,"id":"panorama_8FD303C7_8667_6B05_41DA_802850A8E3B6_camera"},{"children":["this.WebFrame_8AFF0E62_866B_3D3F_41DF_109FF9B12D01_mobile","this.CloseButton_8AD1E804_866B_24FB_41D6_9A0681DE7A73_mobile"],"id":"Container_8DB3406B_8669_250D_41C7_1CAF538F284E_mobile","backgroundColorDirection":"vertical","scrollBarVisible":"rollOver","paddingTop":0,"borderRadius":0,"width":"100%","layout":"absolute","paddingLeft":0,"creationPolicy":"inAdvance","right":"0%","borderSize":0,"paddingBottom":0,"scrollBarColor":"#000000","backgroundColorRatios":[0,1],"scrollBarWidth":5,"class":"Container","minHeight":1,"minWidth":1,"verticalAlign":"top","overflow":"scroll","contentOpaque":false,"shadow":false,"backgroundColor":["#FFFFFF","#FFFFFF"],"gap":5,"bottom":"20%","height":"60%","toolTipHorizontalAlign":"center","propagateClick":false,"horizontalAlign":"left","scrollBarOpacity":0.5,"backgroundOpacity":0.3,"scrollBarMargin":1,"paddingRight":0,"data":{"name":"cont"}},{"progressOpacity":1,"toolTipTextShadowBlurRadius":1,"id":"MainViewer_mobile","borderRadius":0,"progressBarBorderColor":"#000000","playbackBarProgressBorderColor":"#000000","progressRight":0,"progressBarBackgroundColorDirection":"vertical","playbackBarBorderRadius":0,"paddingTop":0,"width":"100%","subtitlesFontFamily":"Arial","playbackBarHeadHeight":15,"paddingLeft":0,"playbackBarLeft":0,"vrPointerColor":"#FFFFFF","toolTipShadowColor":"#333333","borderSize":0,"paddingBottom":0,"doubleClickAction":"toggle_fullscreen","subtitlesShadow":false,"playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderRadius":0,"playbackBarHeadBorderSize":0,"toolTipFontStyle":"normal","transitionMode":"blending","firstTransitionDuration":0,"toolTipBackgroundColor":"#F6F6F6","toolTipFontWeight":"normal","class":"ViewerArea","progressBarBackgroundColorRatios":[0],"playbackBarProgressOpacity":1,"toolTipPaddingBottom":2,"toolTipFontColor":"#606060","progressBackgroundColorDirection":"vertical","subtitlesPaddingTop":5,"playbackBarHeadBorderColor":"#000000","playbackBarBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"subtitlesGap":0,"shadow":false,"subtitlesHorizontalAlign":"center","subtitlesBackgroundColor":"#000000","progressBarBackgroundColor":["#3399FF"],"vrPointerSelectionColor":"#FF6600","playbackBarHeadOpacity":1,"progressBorderColor":"#000000","subtitlesOpacity":1,"toolTipShadowHorizontalLength":0,"toolTipDisplayTime":600,"playbackBarHeadShadow":true,"subtitlesVerticalAlign":"bottom","playbackBarOpacity":1,"progressBackgroundOpacity":1,"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesBorderSize":0,"toolTipPaddingLeft":3,"subtitlesTextShadowOpacity":1,"propagateClick":false,"progressBarOpacity":1,"toolTipShadowBlurRadius":1,"playbackBarBottom":5,"displayTooltipInTouchScreens":true,"paddingRight":0,"progressBackgroundColor":["#FFFFFF"],"progressBottom":0,"vrPointerSelectionTime":2000,"subtitlesFontColor":"#FFFFFF","playbackBarProgressBackgroundColorDirection":"vertical","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeight":10,"height":"100%","subtitlesTop":0,"subtitlesTextShadowColor":"#000000","toolTipBorderSize":0,"progressHeight":10,"subtitlesTextShadowHorizontalLength":1,"progressBorderSize":0,"playbackBarHeadBackgroundColorDirection":"vertical","transitionDuration":500,"toolTipShadowSpread":0,"playbackBarHeadWidth":6,"progressBarBorderSize":0,"progressBarBorderRadius":0,"subtitlesFontSize":"3vmin","subtitlesFontWeight":"normal","playbackBarBackgroundColorDirection":"vertical","toolTipShadowOpacity":1,"playbackBarProgressBorderSize":0,"playbackBarProgressBorderRadius":0,"subtitlesTextShadowVerticalLength":1,"playbackBarRight":0,"minHeight":25,"toolTipFontSize":"1.11vmin","toolTipShadowVerticalLength":0,"minWidth":50,"toolTipBorderRadius":1,"subtitlesPaddingBottom":5,"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesPaddingLeft":5,"playbackBarHeadShadowHorizontalLength":0,"subtitlesBottom":50,"subtitlesBackgroundOpacity":0.2,"progressBorderRadius":0,"subtitlesBorderColor":"#FFFFFF","toolTipHorizontalAlign":"center","toolTipTextShadowOpacity":0,"playbackBarHeadShadowOpacity":0.7,"playbackBarHeadShadowVerticalLength":0,"toolTipTextShadowColor":"#000000","progressLeft":0,"toolTipOpacity":1,"toolTipPaddingRight":3,"toolTipPaddingTop":2,"subtitlesPaddingRight":5,"playbackBarBackgroundOpacity":1,"playbackBarProgressBackgroundColorRatios":[0],"toolTipFontFamily":"Arial","toolTipBorderColor":"#767676","subtitlesTextDecoration":"none","progressBackgroundColorRatios":[0],"subtitlesTextShadowBlurRadius":0,"playbackBarBorderColor":"#FFFFFF","data":{"name":"Main Viewer"},"playbackBarHeadShadowBlurRadius":1.5},{"items":[{"media":"this.panorama_8FD303C7_8667_6B05_41DA_802850A8E3B6","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","class":"PanoramaPlayListItem","camera":"this.panorama_8FD303C7_8667_6B05_41DA_802850A8E3B6_camera","player":"this.MainViewer_mobilePanoramaPlayer"},{"media":"this.panorama_8C9F73BA_8667_2B0F_41C7_0270B09A22B6","end":"this.trigger('tourEnded')","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","class":"PanoramaPlayListItem","camera":"this.panorama_8C9F73BA_8667_2B0F_41C7_0270B09A22B6_camera","player":"this.MainViewer_mobilePanoramaPlayer"}],"id":"mainPlayList","class":"PlayList"},{"borderRadius":0,"children":["this.Container_8DB3406B_8669_250D_41C7_1CAF538F284E_mobile"],"id":"Container_8DF885B1_8669_6F1D_41DB_22383FCBF927_mobile","scrollBarVisible":"rollOver","scrollBarWidth":5,"width":"100%","layout":"absolute","paddingLeft":0,"creationPolicy":"inAdvance","paddingTop":0,"borderSize":0,"paddingBottom":0,"scrollBarColor":"#000000","right":"0%","class":"Container","minHeight":1,"minWidth":1,"verticalAlign":"top","top":"0%","overflow":"scroll","contentOpaque":false,"shadow":false,"gap":5,"height":"100%","toolTipHorizontalAlign":"center","propagateClick":false,"horizontalAlign":"left","scrollBarOpacity":0.5,"backgroundOpacity":0,"scrollBarMargin":1,"visible":false,"paddingRight":0,"data":{"name":"cont camera"}},{"fontFamily":"Arial","data":{"name":"CloseButton2345"},"layout":"horizontal","id":"CloseButton_8AD1E804_866B_24FB_41D6_9A0681DE7A73_mobile","backgroundColorDirection":"vertical","width":17.5,"shadowColor":"#000000","borderRadius":0,"iconWidth":"100%","paddingLeft":2.5,"paddingTop":2.5,"borderSize":0,"paddingBottom":2.5,"backgroundColorRatios":[0,0.1,1],"iconLineWidth":2,"iconColor":"#000000","right":"0%","rollOverIconColor":"#666666","borderColor":"#000000","iconHeight":"100%","class":"CloseButton","minHeight":1,"minWidth":1,"verticalAlign":"middle","backgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"shadow":false,"mode":"push","shadowSpread":1,"top":"0%","fontSize":"1.29vmin","gap":5,"click":"this.setComponentVisibility(this.Container_8DF885B1_8669_6F1D_41DB_22383FCBF927_mobile, false, 0, this.effect_8B652890_8669_651B_41DA_AF87823390E7, 'hideEffect', false)","shadowBlurRadius":3,"fontColor":"#FFFFFF","pressedIconColor":"#888888","height":17.5,"toolTipHorizontalAlign":"center","propagateClick":false,"horizontalAlign":"center","backgroundOpacity":0.3,"textDecoration":"none","paddingRight":2.5,"fontStyle":"normal","cursor":"hand","fontWeight":"normal"},{"viewerArea":"this.MainViewer_mobile","displayPlaybackBar":true,"class":"PanoramaPlayer","touchControlMode":"drag_rotation","mouseControlMode":"drag_rotation","arrowKeysAction":"translate","id":"MainViewer_mobilePanoramaPlayer","gyroscopeVerticalDraggingEnabled":true,"gyroscopeEnabled":true},{"label":trans('panorama_8FD303C7_8667_6B05_41DA_802850A8E3B6.label'),"id":"panorama_8FD303C7_8667_6B05_41DA_802850A8E3B6","pitch":0,"adjacentPanoramas":[{"panorama":"this.panorama_8C9F73BA_8667_2B0F_41C7_0270B09A22B6","class":"AdjacentPanorama","distance":100,"select":"this.mainPlayList.set('selectedIndex', 1)"}],"vfov":180,"frames":[{"cube":{"class":"ImageResource","levels":[{"url":"media/panorama_8FD303C7_8667_6B05_41DA_802850A8E3B6_0/{face}/0/{row}_{column}.jpg","colCount":18,"tags":"ondemand","class":"TiledImageResourceLevel","width":9216,"rowCount":3,"height":1536},{"url":"media/panorama_8FD303C7_8667_6B05_41DA_802850A8E3B6_0/{face}/1/{row}_{column}.jpg","colCount":12,"tags":"ondemand","class":"TiledImageResourceLevel","width":6144,"rowCount":2,"height":1024},{"url":"media/panorama_8FD303C7_8667_6B05_41DA_802850A8E3B6_0/{face}/2/{row}_{column}.jpg","colCount":6,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","width":3072,"rowCount":1,"height":512}]},"thumbnailUrl":"media/panorama_8FD303C7_8667_6B05_41DA_802850A8E3B6_t.jpg","class":"CubicPanoramaFrame"}],"hfovMin":"150%","overlays":["this.overlay_8BE22BD6_866F_FB04_41DB_C9E269C2FBBB","this.overlay_882AA501_8669_6CFC_418A_1BE00CB4C640","this.overlay_959034E0_8669_2D3B_41DD_6071FE3A399B","this.overlay_88CAF943_8667_E77D_41B2_07AB93A479B5","this.overlay_97BA34AE_866B_2D04_41AC_E305728C46C6","this.overlay_97C3D899_8668_E50D_41D2_3CB2854E8A22"],"thumbnailUrl":"media/panorama_8FD303C7_8667_6B05_41DA_802850A8E3B6_t.jpg","data":{"label":"Site - R01_3 - Panor\u00e2mica"},"class":"Panorama","partial":false,"hfovMax":130,"hfov":360},{"duration":500,"easing":"linear","id":"effect_8B652890_8669_651B_41DA_AF87823390E7","class":"FadeOutEffect"},{"items":[{"media":"this.video_881DCF11_8667_3B1D_41CA_0690A3991A53","start":"this.MainViewer_mobileVideoPlayer.set('displayPlaybackBar', true); this.MainViewer_mobileVideoPlayer.set('displayPlayOverlay', true); this.MainViewer_mobileVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_93604F6E_8669_1B07_41D9_9AAD09577A43, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_93604F6E_8669_1B07_41D9_9AAD09577A43, 0)","class":"VideoPlayListItem","begin":"this.fixTogglePlayPauseButton(this.MainViewer_mobileVideoPlayer)","player":"this.MainViewer_mobileVideoPlayer"}],"id":"playList_93604F6E_8669_1B07_41D9_9AAD09577A43","class":"PlayList"},{"id":"WebFrame_8AFF0E62_866B_3D3F_41DF_109FF9B12D01_mobile","backgroundColorDirection":"vertical","width":"100%","paddingTop":0,"borderRadius":0,"paddingLeft":0,"right":"0%","borderSize":0,"paddingBottom":0,"backgroundColorRatios":[0],"url":"//www.youtube.com/embed/jgyWXn-WkjE?v=jgyWXn-WkjE&t=7449s","class":"WebFrame","minHeight":1,"minWidth":1,"shadow":false,"backgroundColor":["#FFFFFF"],"bottom":"0%","height":"100%","toolTipHorizontalAlign":"center","scrollEnabled":true,"propagateClick":false,"backgroundOpacity":1,"insetBorder":false,"paddingRight":0,"data":{"name":"link"}},{"movements":[{"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","id":"sequence_8FAE5E24_8667_7D3B_41C6_C971B193849D"},{"areas":["this.HotspotPanoramaOverlayArea_9670743A_867F_2D0C_41D3_363A90EBE86A"],"class":"HotspotPanoramaOverlay","rollOverDisplay":false,"useHandCursor":true,"enabledInCardboard":true,"items":[{"distance":50,"image":"this.AnimatedImageResource_92A4AF46_8669_1B07_41AC_C834181CEFCA","pitch":5.34,"vfov":12.75,"yaw":-34.93,"scaleMode":"fit_inside","data":{"label":"Image"},"horizontalAlign":"center","verticalAlign":"middle","hfov":13.5,"class":"HotspotPanoramaOverlayImage"}],"id":"overlay_89B8A414_867F_2D04_41CC_1265AEE3FC67","data":{"label":"Image"},"maps":[]},{"areas":["this.HotspotPanoramaOverlayArea_96C8C409_8679_2D0C_41D6_FB04E833E9D9"],"class":"HotspotPanoramaOverlay","rollOverDisplay":false,"useHandCursor":true,"enabledInCardboard":true,"items":[{"image":{"levels":[{"url":"media/panorama_8C9F73BA_8667_2B0F_41C7_0270B09A22B6_HS_cdyshvd3.png","width":222,"class":"ImageResourceLevel","height":88}],"class":"ImageResource"},"pitch":-5.34,"yaw":-34.04,"data":{"label":"Text"},"class":"HotspotPanoramaOverlayImage","hfov":19.51,"distance":50}],"id":"overlay_96D4D3C6_8679_2B04_41D3_54C09B0824A0","data":{"label":"Text"},"maps":[]},{"areas":["this.HotspotPanoramaOverlayArea_962143EA_8678_EB0F_41C9_BA6362D075D5"],"class":"HotspotPanoramaOverlay","rollOverDisplay":false,"useHandCursor":true,"enabledInCardboard":true,"items":[{"scaleMode":"fit_inside","data":{"label":"Image"},"horizontalAlign":"center","verticalAlign":"middle","class":"HotspotPanoramaOverlayImage","image":"this.res_97FBBE17_8679_FD05_41CD_4DF7D0FBA13F","pitch":0.45,"vfov":17.07,"yaw":-158.27,"distance":50,"hfov":17.57}],"id":"overlay_948F73B5_8678_EB05_41C9_E676E5F79B0B","data":{"label":"Image"},"maps":[]},{"areas":["this.HotspotPanoramaOverlayArea_9622A18D_8679_6705_41C9_866A2DD56E99"],"class":"HotspotPanoramaOverlay","rollOverDisplay":false,"useHandCursor":true,"enabledInCardboard":true,"items":[{"scaleMode":"fit_inside","data":{"label":"Image"},"horizontalAlign":"center","verticalAlign":"middle","class":"HotspotPanoramaOverlayImage","image":"this.res_97FBDE17_8679_FD05_41AA_0601048ECC97","pitch":13.76,"vfov":6.54,"yaw":-158.64,"distance":50,"hfov":40.28}],"id":"overlay_943C315A_8679_670C_41DC_6F4C2E90BA21","data":{"label":"Image"},"maps":[]},{"areas":["this.HotspotPanoramaOverlayArea_94FE857B_8669_2F0D_41D1_9DF32F0310C2"],"class":"HotspotPanoramaOverlay","rollOverDisplay":false,"useHandCursor":true,"enabledInCardboard":true,"items":[{"scaleMode":"fit_inside","data":{"label":"Image"},"horizontalAlign":"center","verticalAlign":"middle","class":"HotspotPanoramaOverlayImage","image":"this.res_90342535_8669_6F04_41DF_0E3C42ABF6F8","pitch":-55.2,"vfov":7.57,"yaw":-55.91,"distance":50,"hfov":7.57}],"id":"overlay_94F9657A_8669_2F0F_41D1_11F128BA5592","data":{"label":"Image"},"maps":[]},{"movements":[{"yawDelta":18.5,"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":323,"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96}],"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","id":"sequence_8FAA9E26_8667_7D07_41C2_8223CBEF3583"},{"areas":["this.HotspotPanoramaOverlayArea_8B9CEC22_866F_FD3F_41C8_BBFE533889CE"],"class":"HotspotPanoramaOverlay","rollOverDisplay":false,"useHandCursor":true,"items":[{"distance":50,"image":"this.AnimatedImageResource_92A92F45_8669_1B05_41DE_D98A8C58524C","pitch":1.07,"vfov":19.83,"yaw":30.64,"scaleMode":"fit_inside","data":{"label":"Image"},"horizontalAlign":"center","verticalAlign":"middle","hfov":19.08,"class":"HotspotPanoramaOverlayImage"}],"id":"overlay_8BE22BD6_866F_FB04_41DB_C9E269C2FBBB","data":{"label":"Image"},"maps":[]},{"areas":["this.HotspotPanoramaOverlayArea_88319504_8669_6F04_41D1_331CCF65BA6C"],"class":"HotspotPanoramaOverlay","rollOverDisplay":false,"useHandCursor":true,"enabledInCardboard":true,"items":[{"distance":50,"image":"this.AnimatedImageResource_92A9FF45_8669_1B05_41E0_19A5DF57F563","pitch":28.08,"vfov":14.18,"yaw":135.4,"scaleMode":"fit_inside","data":{"label":"Image"},"horizontalAlign":"center","verticalAlign":"middle","hfov":13.29,"class":"HotspotPanoramaOverlayImage"}],"id":"overlay_882AA501_8669_6CFC_418A_1BE00CB4C640","data":{"label":"Image"},"maps":[]},{"areas":["this.HotspotPanoramaOverlayArea_880045AD_8669_2F05_41D0_9B38F6C30500"],"class":"HotspotPanoramaOverlay","rollOverDisplay":false,"useHandCursor":true,"enabledInCardboard":true,"items":[{"scaleMode":"fit_inside","data":{"label":"Image"},"horizontalAlign":"center","verticalAlign":"middle","class":"HotspotPanoramaOverlayImage","image":"this.res_950EA428_8679_2D0C_41E0_84D5E929ED61","pitch":4.08,"vfov":8.42,"yaw":-165.43,"distance":50,"hfov":82.14}],"id":"overlay_959034E0_8669_2D3B_41DD_6071FE3A399B","data":{"label":"Image"},"maps":[]},{"videoVisibleOnStop":false,"roll":1.79,"chromaThreshold":0.04,"data":{"label":"Video"},"id":"overlay_88CAF943_8667_E77D_41B2_07AB93A479B5","vfov":8.29,"blending":0,"loop":true,"chromaSmoothing":0.1,"image":"this.res_950F7428_8679_2D0C_41CC_F7AA625293ED","pitch":-4.55,"autoplay":true,"useHandCursor":true,"chromaColor":"#FFFFFF","click":"this.openLink(this.translate('LinkBehaviour_948674AF_8679_2D05_41CB_69CD71BA7291.source'), '_blank')","yaw":-112.47,"rotationY":-0.21,"rotationX":17.35,"class":"VideoPanoramaOverlay","hfov":7.89,"cues":[],"enabledInCardboard":true,"distance":50,"video":{"width":858,"mp4Url":"media/video_881DCF11_8667_3B1D_41CA_0690A3991A53.mp4","class":"VideoResource","height":858}},{"areas":["this.HotspotPanoramaOverlayArea_97173557_866B_2F04_41C6_FAA1C8034F54"],"class":"HotspotPanoramaOverlay","rollOverDisplay":false,"useHandCursor":true,"enabledInCardboard":true,"items":[{"scaleMode":"fit_inside","data":{"label":"Image"},"horizontalAlign":"center","verticalAlign":"middle","class":"HotspotPanoramaOverlayImage","image":"this.res_90342535_8669_6F04_41DF_0E3C42ABF6F8","pitch":-44.9,"vfov":9.4,"yaw":-0.64,"distance":50,"hfov":9.4}],"id":"overlay_97BA34AE_866B_2D04_41AC_E305728C46C6","data":{"label":"Image"},"maps":[]},{"areas":["this.HotspotPanoramaOverlayArea_97B2C8B5_8668_E505_41A1_3078C1CD2222"],"class":"HotspotPanoramaOverlay","rollOverDisplay":false,"useHandCursor":true,"enabledInCardboard":true,"items":[{"image":{"levels":[{"url":"media/panorama_8FD303C7_8667_6B05_41DA_802850A8E3B6_HS_6dfdj6yb.png","width":483,"class":"ImageResourceLevel","height":100}],"class":"ImageResource"},"pitch":-56.09,"yaw":2.76,"data":{"label":"Text"},"class":"HotspotPanoramaOverlayImage","hfov":23.69,"distance":50}],"id":"overlay_97C3D899_8668_E50D_41D2_3CB2854E8A22","data":{"label":"Text"},"maps":[]},{"mapColor":"any","id":"HotspotPanoramaOverlayArea_9670743A_867F_2D0C_41D3_363A90EBE86A","class":"HotspotPanoramaOverlayArea"},{"rowCount":18,"colCount":17,"levels":[{"url":"media/res_97FA2E16_8679_FD07_41D3_ED59E4B107E6_0.png","width":2482,"class":"ImageResourceLevel","height":2628}],"class":"AnimatedImageResource","frameCount":300,"frameDuration":33,"id":"AnimatedImageResource_92A4AF46_8669_1B07_41AC_C834181CEFCA"},{"mapColor":"any","id":"HotspotPanoramaOverlayArea_96C8C409_8679_2D0C_41D6_FB04E833E9D9","class":"HotspotPanoramaOverlayArea"},{"mapColor":"any","id":"HotspotPanoramaOverlayArea_962143EA_8678_EB0F_41C9_BA6362D075D5","class":"HotspotPanoramaOverlayArea"},{"levels":[{"url":"media/res_97FBBE17_8679_FD05_41CD_4DF7D0FBA13F_0.png","width":194,"class":"ImageResourceLevel","height":194}],"class":"ImageResource","id":"res_97FBBE17_8679_FD05_41CD_4DF7D0FBA13F"},{"mapColor":"any","id":"HotspotPanoramaOverlayArea_9622A18D_8679_6705_41C9_866A2DD56E99","class":"HotspotPanoramaOverlayArea"},{"levels":[{"url":"media/res_97FBDE17_8679_FD05_41AA_0601048ECC97_0.png","width":371,"class":"ImageResourceLevel","height":77}],"class":"ImageResource","id":"res_97FBDE17_8679_FD05_41AA_0601048ECC97"},{"click":"this.mainPlayList.set('selectedIndex', 0)","mapColor":"any","id":"HotspotPanoramaOverlayArea_94FE857B_8669_2F0D_41D1_9DF32F0310C2","class":"HotspotPanoramaOverlayArea"},{"levels":[{"url":"media/res_90342535_8669_6F04_41DF_0E3C42ABF6F8_0.png","width":151,"class":"ImageResourceLevel","height":151}],"class":"ImageResource","id":"res_90342535_8669_6F04_41DF_0E3C42ABF6F8"},{"click":"this.setComponentVisibility(this.Container_8DF885B1_8669_6F1D_41DB_22383FCBF927_mobile, true, 0, this.effect_968F4876_8669_2507_41D9_2E76BD631618, 'showEffect', false)","mapColor":"any","id":"HotspotPanoramaOverlayArea_8B9CEC22_866F_FD3F_41C8_BBFE533889CE","class":"HotspotPanoramaOverlayArea"},{"rowCount":13,"colCount":11,"levels":[{"url":"media/res_950D8426_8679_2D04_41D2_703DF038CA5F_0.png","width":2387,"class":"ImageResourceLevel","height":2821}],"class":"AnimatedImageResource","frameCount":136,"frameDuration":33,"id":"AnimatedImageResource_92A92F45_8669_1B05_41DE_D98A8C58524C"},{"mapColor":"any","id":"HotspotPanoramaOverlayArea_88319504_8669_6F04_41D1_331CCF65BA6C","class":"HotspotPanoramaOverlayArea"},{"rowCount":18,"colCount":17,"levels":[{"url":"media/res_950F4427_8679_2D04_41DD_79CA3CC38A77_0.png","width":2907,"class":"ImageResourceLevel","height":3078}],"class":"AnimatedImageResource","frameCount":300,"frameDuration":16,"id":"AnimatedImageResource_92A9FF45_8669_1B05_41E0_19A5DF57F563"},{"click":"this.mainPlayList.set('selectedIndex', 1)","mapColor":"any","id":"HotspotPanoramaOverlayArea_880045AD_8669_2F05_41D0_9B38F6C30500","class":"HotspotPanoramaOverlayArea"},{"levels":[{"url":"media/res_950EA428_8679_2D0C_41E0_84D5E929ED61_0.png","width":937,"class":"ImageResourceLevel","height":96}],"class":"ImageResource","id":"res_950EA428_8679_2D0C_41E0_84D5E929ED61"},{"id":"res_950F7428_8679_2D0C_41CC_F7AA625293ED","class":"ImageResource","levels":[{"url":"media/res_950F7428_8679_2D0C_41CC_F7AA625293ED_0.png","width":2,"class":"ImageResourceLevel","height":2}]},{"mapColor":"any","id":"HotspotPanoramaOverlayArea_97173557_866B_2F04_41C6_FAA1C8034F54","class":"HotspotPanoramaOverlayArea"},{"mapColor":"any","id":"HotspotPanoramaOverlayArea_97B2C8B5_8668_E505_41A1_3078C1CD2222","class":"HotspotPanoramaOverlayArea"}],"desktopMipmappingEnabled":false,"mouseWheelEnabled":true,"horizontalAlign":"left","scrollBarOpacity":0.5,"propagateClick":false,"downloadEnabled":false,"scrollBarMargin":2,"paddingRight":0,"data":{"defaultLocale":"pt","name":"Player563","locales":{"pt":"locale/pt.txt"}}};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2020.3.8.js.map
//Generated with v2020.3.8, Sat Jul 25 2020