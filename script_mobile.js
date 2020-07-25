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
    var d = {"start":"this['MainViewer'] = this.MainViewer_mobile; this.init(); this.initGA()","scripts":{"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setMapLocation":TDV.Tour.Script.setMapLocation,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setValue":TDV.Tour.Script.setValue,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"historyGoBack":TDV.Tour.Script.historyGoBack,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getOverlays":TDV.Tour.Script.getOverlays,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"historyGoForward":TDV.Tour.Script.historyGoForward,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"shareSocial":TDV.Tour.Script.shareSocial,"resumePlayers":TDV.Tour.Script.resumePlayers,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"quizShowScore":TDV.Tour.Script.quizShowScore,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"mixObject":TDV.Tour.Script.mixObject,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getPixels":TDV.Tour.Script.getPixels,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"init":TDV.Tour.Script.init,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setLocale":TDV.Tour.Script.setLocale,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getKey":TDV.Tour.Script.getKey,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"showPopupImage":TDV.Tour.Script.showPopupImage,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getMediaByName":TDV.Tour.Script.getMediaByName,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"cloneCamera":TDV.Tour.Script.cloneCamera,"quizFinish":TDV.Tour.Script.quizFinish,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"playAudioList":TDV.Tour.Script.playAudioList,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"unregisterKey":TDV.Tour.Script.unregisterKey,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"translate":TDV.Tour.Script.translate,"initGA":TDV.Tour.Script.initGA,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"quizStart":TDV.Tour.Script.quizStart,"registerKey":TDV.Tour.Script.registerKey,"showWindow":TDV.Tour.Script.showWindow,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"initQuiz":TDV.Tour.Script.initQuiz,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getComponentByName":TDV.Tour.Script.getComponentByName,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"existsKey":TDV.Tour.Script.existsKey,"openLink":TDV.Tour.Script.openLink},"minHeight":20,"borderSize":0,"scrollBarWidth":10,"minWidth":20,"backgroundPreloadEnabled":true,"paddingRight":0,"mobileMipmappingEnabled":false,"shadow":false,"downloadEnabled":false,"defaultVRPointer":"laser","width":"100%","borderRadius":0,"propagateClick":false,"contentOpaque":false,"class":"Player","id":"rootPlayer","height":"100%","children":["this.MainViewer_mobile","this.Container_8DF885B1_8669_6F1D_41DB_22383FCBF927_mobile"],"paddingLeft":0,"vrPolyfillScale":0.75,"scrollBarMargin":2,"paddingTop":0,"scrollBarColor":"#000000","scrollBarVisible":"rollOver","overflow":"hidden","paddingBottom":0,"desktopMipmappingEnabled":false,"scrollBarOpacity":0.5,"mouseWheelEnabled":true,"gap":10,"mediaActivationMode":"window","verticalAlign":"top","creationPolicy":"inAdvance","definitions": [{"id":"MainViewer_mobileVideoPlayer","viewerArea":"this.MainViewer_mobile","clickAction":"play_pause","displayPlaybackBar":true,"class":"VideoPlayer","displayPlayOverlay":true},{"id":"playList_9CFAEED3_87B8_59E9_41DE_341ABA9E9375","items":[{"player":"this.MainViewer_mobileVideoPlayer","begin":"this.fixTogglePlayPauseButton(this.MainViewer_mobileVideoPlayer)","start":"this.MainViewer_mobileVideoPlayer.set('displayPlaybackBar', true); this.MainViewer_mobileVideoPlayer.set('displayPlayOverlay', true); this.MainViewer_mobileVideoPlayer.set('clickAction', 'play_pause'); this.changeBackgroundWhilePlay(this.playList_9CFAEED3_87B8_59E9_41DE_341ABA9E9375, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_9CFAEED3_87B8_59E9_41DE_341ABA9E9375, 0)","class":"VideoPlayListItem","media":"this.video_881DCF11_8667_3B1D_41CA_0690A3991A53"}],"class":"PlayList"},{"id":"MainViewer_mobilePanoramaPlayer","viewerArea":"this.MainViewer_mobile","arrowKeysAction":"translate","gyroscopeVerticalDraggingEnabled":true,"mouseControlMode":"drag_rotation","displayPlaybackBar":true,"gyroscopeEnabled":true,"class":"PanoramaPlayer","touchControlMode":"drag_rotation"},{"id":"effect_968F4876_8669_2507_41D9_2E76BD631618","easing":"linear","duration":500,"class":"FadeInEffect"},{"id":"effect_8B652890_8669_651B_41DA_AF87823390E7","easing":"linear","duration":500,"class":"FadeOutEffect"},{"id":"mainPlayList","items":[{"player":"this.MainViewer_mobilePanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","camera":"this.panorama_8FD303C7_8667_6B05_41DA_802850A8E3B6_camera","class":"PanoramaPlayListItem","media":"this.panorama_8FD303C7_8667_6B05_41DA_802850A8E3B6"},{"end":"this.trigger('tourEnded')","player":"this.MainViewer_mobilePanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","camera":"this.panorama_8C9F73BA_8667_2B0F_41C7_0270B09A22B6_camera","class":"PanoramaPlayListItem","media":"this.panorama_8C9F73BA_8667_2B0F_41C7_0270B09A22B6"}],"class":"PlayList"},{"scrollEnabled":true,"minHeight":1,"borderSize":0,"minWidth":1,"paddingRight":0,"shadow":false,"right":"0%","insetBorder":false,"width":"100%","backgroundOpacity":1,"propagateClick":false,"backgroundColor":["#FFFFFF"],"class":"WebFrame","id":"WebFrame_8AFF0E62_866B_3D3F_41DF_109FF9B12D01_mobile","height":"100%","borderRadius":0,"paddingLeft":0,"url":"//www.youtube.com/embed/jgyWXn-WkjE?v=jgyWXn-WkjE&t=7449s","backgroundColorDirection":"vertical","paddingTop":0,"paddingBottom":0,"backgroundColorRatios":[0],"data":{"name":"link"},"bottom":"0%","toolTipHorizontalAlign":"center"},{"id":"panorama_8C9F73BA_8667_2B0F_41C7_0270B09A22B6_camera","automaticZoomSpeed":10,"initialPosition":{"yaw":-59.79,"class":"PanoramaCameraPosition","pitch":-1.76},"initialSequence":"this.sequence_8FAE5E24_8667_7D3B_41C6_C971B193849D","class":"PanoramaCamera"},{"id":"panorama_8C9F73BA_8667_2B0F_41C7_0270B09A22B6","hfov":360,"thumbnailUrl":"media/panorama_8C9F73BA_8667_2B0F_41C7_0270B09A22B6_t.jpg","vfov":180,"label":trans('panorama_8C9F73BA_8667_2B0F_41C7_0270B09A22B6.label'),"pitch":0,"partial":false,"frames":[{"cube":{"class":"ImageResource","levels":[{"width":9216,"rowCount":3,"height":1536,"url":"media/panorama_8C9F73BA_8667_2B0F_41C7_0270B09A22B6_0/{face}/0/{row}_{column}.jpg","colCount":18,"class":"TiledImageResourceLevel","tags":"ondemand"},{"width":6144,"rowCount":2,"height":1024,"url":"media/panorama_8C9F73BA_8667_2B0F_41C7_0270B09A22B6_0/{face}/1/{row}_{column}.jpg","colCount":12,"class":"TiledImageResourceLevel","tags":"ondemand"},{"width":3072,"rowCount":1,"height":512,"url":"media/panorama_8C9F73BA_8667_2B0F_41C7_0270B09A22B6_0/{face}/2/{row}_{column}.jpg","colCount":6,"class":"TiledImageResourceLevel","tags":["ondemand","preload"]}]},"thumbnailUrl":"media/panorama_8C9F73BA_8667_2B0F_41C7_0270B09A22B6_t.jpg","class":"CubicPanoramaFrame"}],"hfovMax":130,"overlays":["this.overlay_894ABFCD_86B8_77F9_41D4_2F5FD7B1E7C7","this.overlay_96D4D3C6_8679_2B04_41D3_54C09B0824A0","this.overlay_89B7CC83_86B8_D869_41D8_FBE343867531","this.overlay_943C315A_8679_670C_41DC_6F4C2E90BA21","this.overlay_94F9657A_8669_2F0F_41D1_11F128BA5592","this.overlay_88EEF44C_86F8_48FF_41D1_8BEF7199C3D0"],"hfovMin":"150%","data":{"label":"Camarim"},"adjacentPanoramas":[{"panorama":"this.panorama_8FD303C7_8667_6B05_41DA_802850A8E3B6","distance":2.52,"class":"AdjacentPanorama","select":"this.mainPlayList.set('selectedIndex', 0)"}],"class":"Panorama"},{"fontFamily":"Arial","minHeight":1,"borderSize":0,"minWidth":1,"gap":5,"paddingRight":2.5,"shadowColor":"#000000","shadow":false,"right":"0%","shadowBlurRadius":3,"fontStyle":"normal","fontSize":"1.29vmin","borderColor":"#000000","width":17.5,"backgroundOpacity":0.3,"propagateClick":false,"backgroundColor":["#DDDDDD","#EEEEEE","#FFFFFF"],"class":"CloseButton","id":"CloseButton_8AD1E804_866B_24FB_41D6_9A0681DE7A73_mobile","mode":"push","height":17.5,"shadowSpread":1,"borderRadius":0,"iconLineWidth":2,"iconWidth":"100%","paddingLeft":2.5,"iconHeight":"100%","backgroundColorDirection":"vertical","paddingTop":2.5,"click":"this.setComponentVisibility(this.Container_8DF885B1_8669_6F1D_41DB_22383FCBF927_mobile, false, 0, this.effect_8B652890_8669_651B_41DA_AF87823390E7, 'hideEffect', false)","paddingBottom":2.5,"backgroundColorRatios":[0,0.1,1],"pressedIconColor":"#888888","rollOverIconColor":"#666666","data":{"name":"CloseButton2345"},"top":"0%","verticalAlign":"middle","fontWeight":"normal","layout":"horizontal","textDecoration":"none","fontColor":"#FFFFFF","cursor":"hand","horizontalAlign":"center","toolTipHorizontalAlign":"center","iconColor":"#000000"},{"minHeight":1,"scrollBarWidth":5,"minWidth":1,"borderSize":0,"paddingRight":0,"right":"0%","shadow":false,"width":"100%","backgroundOpacity":0,"borderRadius":0,"propagateClick":false,"contentOpaque":false,"class":"Container","id":"Container_8DF885B1_8669_6F1D_41DB_22383FCBF927_mobile","children":["this.Container_8DB3406B_8669_250D_41C7_1CAF538F284E_mobile"],"height":"100%","paddingLeft":0,"scrollBarMargin":1,"paddingTop":0,"scrollBarColor":"#000000","scrollBarVisible":"rollOver","overflow":"scroll","paddingBottom":0,"visible":false,"gap":5,"scrollBarOpacity":0.5,"data":{"name":"cont camera"},"top":"0%","verticalAlign":"top","creationPolicy":"inAdvance","layout":"absolute","horizontalAlign":"left","toolTipHorizontalAlign":"center"},{"minHeight":1,"borderSize":0,"scrollBarWidth":5,"minWidth":1,"paddingRight":0,"shadow":false,"right":"0%","width":"100%","backgroundOpacity":0.3,"propagateClick":false,"contentOpaque":false,"backgroundColor":["#FFFFFF","#FFFFFF"],"class":"Container","id":"Container_8DB3406B_8669_250D_41C7_1CAF538F284E_mobile","children":["this.WebFrame_8AFF0E62_866B_3D3F_41DF_109FF9B12D01_mobile","this.CloseButton_8AD1E804_866B_24FB_41D6_9A0681DE7A73_mobile"],"height":"60%","borderRadius":0,"paddingLeft":0,"scrollBarMargin":1,"backgroundColorDirection":"vertical","paddingTop":0,"scrollBarColor":"#000000","scrollBarVisible":"rollOver","overflow":"scroll","paddingBottom":0,"backgroundColorRatios":[0,1],"scrollBarOpacity":0.5,"data":{"name":"cont"},"gap":5,"verticalAlign":"top","creationPolicy":"inAdvance","bottom":"20%","layout":"absolute","horizontalAlign":"left","toolTipHorizontalAlign":"center"},{"id":"panorama_8FD303C7_8667_6B05_41DA_802850A8E3B6_camera","automaticZoomSpeed":10,"initialPosition":{"yaw":-94.21,"class":"PanoramaCameraPosition","pitch":-2.51},"displayOriginPosition":{"hfov":165,"stereographicFactor":1,"yaw":-94.21,"class":"RotationalCameraDisplayPosition","pitch":-90},"displayMovements":[{"easing":"linear","duration":1000,"class":"TargetRotationalCameraDisplayMovement"},{"targetPitch":-2.51,"easing":"cubic_in_out","targetStereographicFactor":0,"duration":3000,"class":"TargetRotationalCameraDisplayMovement"}],"initialSequence":"this.sequence_8FAA9E26_8667_7D07_41C2_8223CBEF3583","class":"PanoramaCamera"},{"id":"video_881DCF11_8667_3B1D_41CA_0690A3991A53","video":{"height":858,"width":858,"mp4Url":"media/video_881DCF11_8667_3B1D_41CA_0690A3991A53.mp4","class":"VideoResource"},"height":1080,"data":{"label":"ic_red-v5"},"scaleMode":"fit_inside","label":trans('video_881DCF11_8667_3B1D_41CA_0690A3991A53.label'),"loop":false,"width":1080,"thumbnailUrl":"media/video_881DCF11_8667_3B1D_41CA_0690A3991A53_t.jpg","class":"Video"},{"id":"effect_9CB0D3B0_8759_CFA7_41C5_755AEC119BEE","easing":"linear","duration":500,"class":"FadeOutEffect"},{"subtitlesFontSize":"3vmin","subtitlesTop":0,"data":{"name":"Main Viewer"},"toolTipBorderRadius":1,"toolTipTextShadowOpacity":0,"playbackBarProgressBorderSize":0,"toolTipBorderSize":0,"vrPointerSelectionTime":2000,"playbackBarHeadShadowHorizontalLength":0,"toolTipBorderColor":"#767676","toolTipPaddingTop":2,"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderRadius":0,"shadow":false,"playbackBarRight":0,"subtitlesPaddingLeft":5,"toolTipPaddingRight":3,"subtitlesPaddingBottom":5,"subtitlesBottom":50,"progressBorderRadius":0,"toolTipTextShadowColor":"#000000","subtitlesBackgroundOpacity":0.2,"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipFontFamily":"Arial","playbackBarHeadShadowOpacity":0.7,"subtitlesBorderColor":"#FFFFFF","toolTipTextShadowBlurRadius":1,"progressLeft":0,"subtitlesPaddingRight":5,"toolTipFontStyle":"normal","borderRadius":0,"toolTipShadowSpread":0,"class":"ViewerArea","subtitlesTextDecoration":"none","progressRight":0,"playbackBarProgressBackgroundColorRatios":[0],"subtitlesTextShadowBlurRadius":0,"playbackBarHeadShadowBlurRadius":1.5,"progressBackgroundColorRatios":[0],"paddingLeft":0,"subtitlesTextShadowHorizontalLength":1,"progressOpacity":1,"progressBarBackgroundColorDirection":"vertical","toolTipShadowHorizontalLength":0,"playbackBarBorderColor":"#FFFFFF","toolTipBackgroundColor":"#F6F6F6","toolTipShadowColor":"#333333","subtitlesFontFamily":"Arial","playbackBarBorderRadius":0,"transitionDuration":500,"playbackBarHeadHeight":15,"toolTipPaddingBottom":2,"playbackBarLeft":0,"playbackBarBackgroundOpacity":1,"playbackBarProgressBorderColor":"#000000","playbackBarHeadBorderSize":0,"toolTipFontColor":"#606060","progressBarBorderColor":"#000000","playbackBarHeadShadow":true,"subtitlesShadow":false,"playbackBarHeadShadowColor":"#000000","progressBarBackgroundColorRatios":[0],"subtitlesPaddingTop":5,"playbackBarHeadBackgroundColorRatios":[0,1],"progressBackgroundColorDirection":"vertical","vrPointerColor":"#FFFFFF","playbackBarHeadShadowVerticalLength":0,"toolTipShadowOpacity":1,"doubleClickAction":"toggle_fullscreen","minHeight":25,"borderSize":0,"playbackBarHeadBorderRadius":0,"playbackBarHeadOpacity":1,"playbackBarHeadBorderColor":"#000000","subtitlesTextShadowVerticalLength":1,"toolTipPaddingLeft":3,"playbackBarProgressOpacity":1,"paddingRight":0,"subtitlesBackgroundColor":"#000000","minWidth":50,"subtitlesGap":0,"progressBorderColor":"#000000","toolTipOpacity":1,"playbackBarBorderSize":0,"toolTipShadowBlurRadius":1,"progressBarOpacity":1,"subtitlesVerticalAlign":"bottom","firstTransitionDuration":0,"subtitlesHorizontalAlign":"center","playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBarBackgroundColor":["#3399FF"],"progressBackgroundColor":["#FFFFFF"],"displayTooltipInTouchScreens":true,"subtitlesOpacity":1,"subtitlesTextShadowOpacity":1,"toolTipDisplayTime":600,"subtitlesBorderSize":0,"playbackBarOpacity":1,"width":"100%","propagateClick":false,"progressBottom":0,"id":"MainViewer_mobile","height":"100%","subtitlesFontColor":"#FFFFFF","progressHeight":10,"toolTipShadowVerticalLength":0,"playbackBarBottom":5,"progressBackgroundOpacity":1,"toolTipFontSize":"1.11vmin","paddingTop":0,"paddingBottom":0,"vrPointerSelectionColor":"#FF6600","transitionMode":"blending","toolTipFontWeight":"normal","progressBorderSize":0,"subtitlesTextShadowColor":"#000000","progressBarBorderRadius":0,"playbackBarProgressBackgroundColorDirection":"vertical","progressBarBorderSize":0,"subtitlesFontWeight":"normal","playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeadBackgroundColorDirection":"vertical","playbackBarHeight":10,"playbackBarHeadWidth":6,"toolTipHorizontalAlign":"center"},{"id":"effect_9CB0C3B0_8759_CFA7_41C7_19901568371A","easing":"linear","duration":500,"class":"FadeInEffect"},{"id":"panorama_8FD303C7_8667_6B05_41DA_802850A8E3B6","hfov":360,"thumbnailUrl":"media/panorama_8FD303C7_8667_6B05_41DA_802850A8E3B6_t.jpg","vfov":180,"label":trans('panorama_8FD303C7_8667_6B05_41DA_802850A8E3B6.label'),"pitch":0,"partial":false,"frames":[{"cube":{"class":"ImageResource","levels":[{"width":9216,"rowCount":3,"height":1536,"url":"media/panorama_8FD303C7_8667_6B05_41DA_802850A8E3B6_0/{face}/0/{row}_{column}.jpg","colCount":18,"class":"TiledImageResourceLevel","tags":"ondemand"},{"width":6144,"rowCount":2,"height":1024,"url":"media/panorama_8FD303C7_8667_6B05_41DA_802850A8E3B6_0/{face}/1/{row}_{column}.jpg","colCount":12,"class":"TiledImageResourceLevel","tags":"ondemand"},{"width":3072,"rowCount":1,"height":512,"url":"media/panorama_8FD303C7_8667_6B05_41DA_802850A8E3B6_0/{face}/2/{row}_{column}.jpg","colCount":6,"class":"TiledImageResourceLevel","tags":["ondemand","preload"]}]},"thumbnailUrl":"media/panorama_8FD303C7_8667_6B05_41DA_802850A8E3B6_t.jpg","class":"CubicPanoramaFrame"}],"hfovMax":130,"overlays":["this.overlay_8BE22BD6_866F_FB04_41DB_C9E269C2FBBB","this.overlay_882AA501_8669_6CFC_418A_1BE00CB4C640","this.overlay_959034E0_8669_2D3B_41DD_6071FE3A399B","this.overlay_88CAF943_8667_E77D_41B2_07AB93A479B5","this.overlay_97BA34AE_866B_2D04_41AC_E305728C46C6","this.overlay_97C3D899_8668_E50D_41D2_3CB2854E8A22","this.overlay_97DD0177_86A9_C8A9_41D6_6BCE26E6FB46"],"hfovMin":"150%","data":{"label":"Palco - Principal"},"adjacentPanoramas":[{"panorama":"this.panorama_8C9F73BA_8667_2B0F_41C7_0270B09A22B6","distance":100,"class":"AdjacentPanorama","select":"this.mainPlayList.set('selectedIndex', 1)"}],"class":"Panorama"},{"id":"sequence_8FAE5E24_8667_7D3B_41C6_C971B193849D","movements":[{"easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence"},{"id":"overlay_894ABFCD_86B8_77F9_41D4_2F5FD7B1E7C7","areas":["this.HotspotPanoramaOverlayArea_8936FFFA_86B8_779B_41DC_E58A875B0065"],"maps":[],"useHandCursor":true,"enabledInCardboard":true,"rollOverDisplay":false,"items":[{"scaleMode":"fit_inside","verticalAlign":"middle","horizontalAlign":"center","vfov":12.75,"hfov":13.5,"image":"this.res_A757F120_8768_C8A7_41D0_BBDBF1D3047C","distance":50,"pitch":5.34,"yaw":-34.93,"data":{"label":"Image"},"class":"HotspotPanoramaOverlayImage"}],"data":{"label":"Image"},"class":"HotspotPanoramaOverlay"},{"id":"overlay_96D4D3C6_8679_2B04_41D3_54C09B0824A0","areas":["this.HotspotPanoramaOverlayArea_96C8C409_8679_2D0C_41D6_FB04E833E9D9"],"maps":[],"useHandCursor":true,"enabledInCardboard":true,"rollOverDisplay":false,"items":[{"hfov":25.03,"pitch":-3.94,"yaw":-34.99,"image":{"levels":[{"width":285,"height":88,"class":"ImageResourceLevel","url":"media/panorama_8C9F73BA_8667_2B0F_41C7_0270B09A22B6_HS_cdyshvd3.png"}],"class":"ImageResource"},"data":{"label":"Text"},"distance":50,"class":"HotspotPanoramaOverlayImage"}],"data":{"label":"Text"},"class":"HotspotPanoramaOverlay"},{"id":"overlay_89B7CC83_86B8_D869_41D8_FBE343867531","areas":["this.HotspotPanoramaOverlayArea_89BCEC98_86B8_D867_41DC_1B961D575D60"],"maps":[],"useHandCursor":true,"enabledInCardboard":true,"rollOverDisplay":false,"items":[{"scaleMode":"fit_inside","verticalAlign":"middle","horizontalAlign":"center","vfov":17.07,"hfov":17.57,"image":"this.res_A7578120_8768_C8A7_41A4_D995976F00A0","distance":50,"pitch":0.45,"yaw":-158.27,"data":{"label":"Image"},"class":"HotspotPanoramaOverlayImage"}],"data":{"label":"Image"},"class":"HotspotPanoramaOverlay"},{"id":"overlay_943C315A_8679_670C_41DC_6F4C2E90BA21","areas":["this.HotspotPanoramaOverlayArea_9622A18D_8679_6705_41C9_866A2DD56E99"],"maps":[],"useHandCursor":true,"enabledInCardboard":true,"rollOverDisplay":false,"items":[{"scaleMode":"fit_inside","verticalAlign":"middle","horizontalAlign":"center","vfov":6.54,"hfov":40.28,"image":"this.res_97FBDE17_8679_FD05_41AA_0601048ECC97","distance":50,"pitch":13.76,"yaw":-158.64,"data":{"label":"Image"},"class":"HotspotPanoramaOverlayImage"}],"data":{"label":"Image"},"class":"HotspotPanoramaOverlay"},{"id":"overlay_94F9657A_8669_2F0F_41D1_11F128BA5592","areas":["this.HotspotPanoramaOverlayArea_94FE857B_8669_2F0D_41D1_9DF32F0310C2"],"maps":[],"useHandCursor":true,"enabledInCardboard":true,"rollOverDisplay":false,"items":[{"scaleMode":"fit_inside","verticalAlign":"middle","horizontalAlign":"center","vfov":14.83,"hfov":14.94,"image":"this.res_90342535_8669_6F04_41DF_0E3C42ABF6F8","distance":50,"pitch":-34.04,"yaw":-53.54,"data":{"label":"Image"},"class":"HotspotPanoramaOverlayImage"}],"data":{"label":"Image"},"class":"HotspotPanoramaOverlay"},{"id":"overlay_88EEF44C_86F8_48FF_41D1_8BEF7199C3D0","areas":["this.HotspotPanoramaOverlayArea_8856A4EB_86F8_49B9_41D3_138D82E1DDE7"],"maps":[],"useHandCursor":true,"rollOverDisplay":false,"items":[{"hfov":54.5,"pitch":-3.85,"yaw":117.02,"image":{"levels":[{"width":621,"height":62,"class":"ImageResourceLevel","url":"media/panorama_8C9F73BA_8667_2B0F_41C7_0270B09A22B6_HS_4deuo471.png"}],"class":"ImageResource"},"data":{"label":"Text"},"distance":50,"class":"HotspotPanoramaOverlayImage"}],"data":{"label":"Text"},"class":"HotspotPanoramaOverlay"},{"id":"sequence_8FAA9E26_8667_7D07_41C2_8223CBEF3583","movements":[{"easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"},{"easing":"linear","yawSpeed":7.96,"yawDelta":323,"class":"DistancePanoramaCameraMovement"},{"easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5,"class":"DistancePanoramaCameraMovement"}],"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence"},{"id":"overlay_8BE22BD6_866F_FB04_41DB_C9E269C2FBBB","areas":["this.HotspotPanoramaOverlayArea_8B9CEC22_866F_FD3F_41C8_BBFE533889CE"],"maps":[],"useHandCursor":true,"rollOverDisplay":false,"items":[{"hfov":19.08,"image":"this.AnimatedImageResource_9C4ABE90_87B8_5867_4177_02197E2407A0","pitch":1.07,"yaw":30.64,"vfov":19.83,"scaleMode":"fit_inside","verticalAlign":"middle","distance":50,"horizontalAlign":"center","data":{"label":"Image"},"class":"HotspotPanoramaOverlayImage"}],"data":{"label":"Image"},"class":"HotspotPanoramaOverlay"},{"id":"overlay_882AA501_8669_6CFC_418A_1BE00CB4C640","areas":["this.HotspotPanoramaOverlayArea_88319504_8669_6F04_41D1_331CCF65BA6C"],"maps":[],"useHandCursor":true,"enabledInCardboard":true,"rollOverDisplay":false,"items":[{"hfov":13.29,"image":"this.AnimatedImageResource_9CB43E91_87B8_5869_41CB_E4626C4223F4","pitch":28.08,"yaw":135.4,"vfov":14.18,"scaleMode":"fit_inside","verticalAlign":"middle","distance":50,"horizontalAlign":"center","data":{"label":"Image"},"class":"HotspotPanoramaOverlayImage"}],"data":{"label":"Image"},"class":"HotspotPanoramaOverlay"},{"id":"overlay_959034E0_8669_2D3B_41DD_6071FE3A399B","areas":["this.HotspotPanoramaOverlayArea_880045AD_8669_2F05_41D0_9B38F6C30500"],"maps":[],"useHandCursor":true,"enabledInCardboard":true,"rollOverDisplay":false,"items":[{"scaleMode":"fit_inside","verticalAlign":"middle","horizontalAlign":"center","vfov":8.42,"hfov":82.14,"image":"this.res_950EA428_8679_2D0C_41E0_84D5E929ED61","distance":50,"pitch":4.08,"yaw":-165.43,"data":{"label":"Image"},"class":"HotspotPanoramaOverlayImage"}],"data":{"label":"Image"},"class":"HotspotPanoramaOverlay"},{"id":"overlay_88CAF943_8667_E77D_41B2_07AB93A479B5","chromaThreshold":0.04,"hfov":7.89,"video":{"height":858,"width":858,"mp4Url":"media/video_881DCF11_8667_3B1D_41CA_0690A3991A53.mp4","class":"VideoResource"},"loop":true,"videoVisibleOnStop":false,"useHandCursor":true,"chromaSmoothing":0.1,"pitch":-4.55,"chromaColor":"#FFFFFF","yaw":-112.52,"vfov":8.29,"rotationY":-0.21,"rotationX":17.35,"image":"this.res_950F7428_8679_2D0C_41CC_F7AA625293ED","enabledInCardboard":true,"cues":[],"blending":0,"roll":1.79,"autoplay":true,"click":"this.openLink(this.translate('LinkBehaviour_948674AF_8679_2D05_41CB_69CD71BA7291.source'), '_blank')","distance":50,"data":{"label":"Video"},"class":"VideoPanoramaOverlay"},{"id":"overlay_97BA34AE_866B_2D04_41AC_E305728C46C6","areas":["this.HotspotPanoramaOverlayArea_97173557_866B_2F04_41C6_FAA1C8034F54"],"maps":[],"useHandCursor":true,"enabledInCardboard":true,"rollOverDisplay":false,"items":[{"scaleMode":"fit_inside","verticalAlign":"middle","horizontalAlign":"center","vfov":12.38,"hfov":12.71,"image":"this.res_90342535_8669_6F04_41DF_0E3C42ABF6F8","distance":50,"pitch":-43.05,"yaw":1.41,"data":{"label":"Image"},"class":"HotspotPanoramaOverlayImage"}],"data":{"label":"Image"},"class":"HotspotPanoramaOverlay"},{"id":"overlay_97C3D899_8668_E50D_41D2_3CB2854E8A22","areas":["this.HotspotPanoramaOverlayArea_97B2C8B5_8668_E505_41A1_3078C1CD2222"],"maps":[],"useHandCursor":true,"enabledInCardboard":true,"rollOverDisplay":false,"items":[{"hfov":25.99,"pitch":-56.08,"yaw":2.97,"image":{"levels":[{"width":529,"height":120,"class":"ImageResourceLevel","url":"media/panorama_8FD303C7_8667_6B05_41DA_802850A8E3B6_HS_6dfdj6yb.png"}],"class":"ImageResource"},"data":{"label":"Text"},"distance":50,"class":"HotspotPanoramaOverlayImage"}],"data":{"label":"Text"},"class":"HotspotPanoramaOverlay"},{"id":"overlay_97DD0177_86A9_C8A9_41D6_6BCE26E6FB46","areas":["this.HotspotPanoramaOverlayArea_890261F2_86A9_CBAB_41C0_619B8085BDFE"],"maps":[],"useHandCursor":true,"enabledInCardboard":true,"rollOverDisplay":false,"items":[{"scaleMode":"fit_inside","verticalAlign":"middle","horizontalAlign":"center","vfov":2.23,"hfov":10.57,"image":"this.res_A757311F_8768_C899_41C9_D3E4571E9A7A","distance":50,"pitch":-9.4,"yaw":-112.04,"data":{"label":"Image"},"class":"HotspotPanoramaOverlayImage"}],"data":{"label":"Image"},"class":"HotspotPanoramaOverlay"},{"id":"HotspotPanoramaOverlayArea_8936FFFA_86B8_779B_41DC_E58A875B0065","click":"this.openLink(this.translate('LinkBehaviour_94A9DEFE_86A8_FD04_41C5_EFBA51F66390.source'), '_blank')","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"res_A757F120_8768_C8A7_41D0_BBDBF1D3047C","levels":[{"width":146,"height":146,"class":"ImageResourceLevel","url":"media/res_A757F120_8768_C8A7_41D0_BBDBF1D3047C_0.png"}],"class":"ImageResource"},{"id":"HotspotPanoramaOverlayArea_96C8C409_8679_2D0C_41D6_FB04E833E9D9","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"HotspotPanoramaOverlayArea_89BCEC98_86B8_D867_41DC_1B961D575D60","click":"this.openLink(this.translate('LinkBehaviour_94A9FEFE_86A8_FD04_41D7_E1B4017327F5.source'), '_blank')","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"res_A7578120_8768_C8A7_41A4_D995976F00A0","levels":[{"width":194,"height":194,"class":"ImageResourceLevel","url":"media/res_A7578120_8768_C8A7_41A4_D995976F00A0_0.png"}],"class":"ImageResource"},{"id":"HotspotPanoramaOverlayArea_9622A18D_8679_6705_41C9_866A2DD56E99","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"res_97FBDE17_8679_FD05_41AA_0601048ECC97","levels":[{"width":363,"height":77,"class":"ImageResourceLevel","url":"media/res_97FBDE17_8679_FD05_41AA_0601048ECC97_0.png"}],"class":"ImageResource"},{"id":"HotspotPanoramaOverlayArea_94FE857B_8669_2F0D_41D1_9DF32F0310C2","click":"this.mainPlayList.set('selectedIndex', 0)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"res_90342535_8669_6F04_41DF_0E3C42ABF6F8","levels":[{"width":151,"height":151,"class":"ImageResourceLevel","url":"media/res_90342535_8669_6F04_41DF_0E3C42ABF6F8_0.png"}],"class":"ImageResource"},{"id":"HotspotPanoramaOverlayArea_8856A4EB_86F8_49B9_41D3_138D82E1DDE7","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"HotspotPanoramaOverlayArea_8B9CEC22_866F_FD3F_41C8_BBFE533889CE","click":"this.setComponentVisibility(this.Container_8DF885B1_8669_6F1D_41DB_22383FCBF927_mobile, true, 0, this.effect_968F4876_8669_2507_41D9_2E76BD631618, 'showEffect', false)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"AnimatedImageResource_9C4ABE90_87B8_5867_4177_02197E2407A0","levels":[{"width":2387,"height":2821,"class":"ImageResourceLevel","url":"media/res_950D8426_8679_2D04_41D2_703DF038CA5F_0.png"}],"rowCount":13,"frameCount":136,"frameDuration":33,"colCount":11,"class":"AnimatedImageResource"},{"id":"HotspotPanoramaOverlayArea_88319504_8669_6F04_41D1_331CCF65BA6C","click":"this.openLink(this.translate('LinkBehaviour_94A9EEFE_86A8_FD04_41E0_C39790B6F68D.source'), '_blank')","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"AnimatedImageResource_9CB43E91_87B8_5869_41CB_E4626C4223F4","levels":[{"width":2907,"height":3078,"class":"ImageResourceLevel","url":"media/res_950F4427_8679_2D04_41DD_79CA3CC38A77_0.png"}],"rowCount":18,"frameCount":300,"frameDuration":16,"colCount":17,"class":"AnimatedImageResource"},{"id":"HotspotPanoramaOverlayArea_880045AD_8669_2F05_41D0_9B38F6C30500","click":"this.mainPlayList.set('selectedIndex', 1)","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"res_950EA428_8679_2D0C_41E0_84D5E929ED61","levels":[{"width":937,"height":96,"class":"ImageResourceLevel","url":"media/res_950EA428_8679_2D0C_41E0_84D5E929ED61_0.png"}],"class":"ImageResource"},{"id":"res_950F7428_8679_2D0C_41CC_F7AA625293ED","levels":[{"width":2,"height":2,"class":"ImageResourceLevel","url":"media/res_950F7428_8679_2D0C_41CC_F7AA625293ED_0.png"}],"class":"ImageResource"},{"id":"HotspotPanoramaOverlayArea_97173557_866B_2F04_41C6_FAA1C8034F54","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"HotspotPanoramaOverlayArea_97B2C8B5_8668_E505_41A1_3078C1CD2222","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"HotspotPanoramaOverlayArea_890261F2_86A9_CBAB_41C0_619B8085BDFE","class":"HotspotPanoramaOverlayArea","mapColor":"any"},{"id":"res_A757311F_8768_C899_41C9_D3E4571E9A7A","levels":[{"width":220,"height":46,"class":"ImageResourceLevel","url":"media/res_A757311F_8768_C899_41C9_D3E4571E9A7A_0.png"}],"class":"ImageResource"}],"layout":"absolute","horizontalAlign":"left","toolTipHorizontalAlign":"center","data":{"name":"Player563","locales":{"pt":"locale/pt.txt"},"defaultLocale":"pt"}};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2020.3.8.js.map
//Generated with v2020.3.8, Sat Jul 25 2020