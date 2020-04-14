import { Component } from '@angular/core';
import {Serie} from './lib/bd2-heatmap.dom';


const dataJson =
`
[ { "traceNr": 1, "dataId": 1, "traceRef": "[B11]", "label": "24.0:5.0_COS:NONE_0.1", "fill": false, "data": [ { "x": 24, "y": 10.00847102040816 }, { "x": 25, "y": 10.972243061224487 }, { "x": 26, "y": 10.495015102040814 }, { "x": 27, "y": 11.12078714285714 }, { "x": 28, "y": 11.824559183673466 }, { "x": 29, "y": 12.152331224489792 }, { "x": 30, "y": 12.15210326530612 }, { "x": 31, "y": 11.911875306122447 }, { "x": 32, "y": 10.481647346938773 }, { "x": 33, "y": 10.745419387755101 }, { "x": 34, "y": 9.898191428571426 }, { "x": 35, "y": 8.439963469387754 }, { "x": 36, "y": 7.988735510204078 }, { "x": 37, "y": 9.623507551020406 }, { "x": 38, "y": 8.036279591836731 }, { "x": 39, "y": 7.424051632653059 }, { "x": 40, "y": 6.339823673469386 }, { "x": 41, "y": 8.010595714285712 }, { "x": 42, "y": 6.727367755102039 }, { "x": 43, "y": 8.181139795918366 }, { "x": 44, "y": 6.647911836734693 }, { "x": 45, "y": 8.67268387755102 }, { "x": 46, "y": 10.108455918367346 }, { "x": 47, "y": 10.260227959183673 }, { "x": 48, "y": 10.673999999999998 }, { "x": 49, "y": 11.045772040816326 }, { "x": 50, "y": 12.11254408163265 }, { "x": 51, "y": 12.691316122448978 }, { "x": 52, "y": 12.824088163265305 }, { "x": 53, "y": 13.005860204081632 }, { "x": 54, "y": 12.817632244897958 }, { "x": 55, "y": 12.832404285714285 }, { "x": 56, "y": 12.434176326530611 }, { "x": 57, "y": 11.852948367346936 }, { "x": 58, "y": 11.223720408163265 }, { "x": 59, "y": 9.692492448979593 }, { "x": 60, "y": 9.585264489795918 }, { "x": 61, "y": 9.196036530612243 }, { "x": 62, "y": 8.26580857142857 }, { "x": 63, "y": 9.369580612244897 }, { "x": 64, "y": 8.727352653061223 }, { "x": 65, "y": 8.42612469387755 }, { "x": 66, "y": 9.068896734693876 }, { "x": 67, "y": 8.978668775510204 }, { "x": 68, "y": 9.747440816326531 }, { "x": 69, "y": 9.714212857142856 }, { "x": 70, "y": 11.405984897959184 }, { "x": 71, "y": 10.00375693877551 }, { "x": 72, "y": 11.413528979591836 } ], "min": 6.339823673469386, "max": 13.005860204081632, "mean": 10.108836734693876 }, { "traceNr": 2, "dataId": 2, "traceRef": "[C11]", "label": "24.0:5.0_3rd:NONE_0.1", "fill": false, "data": [ { "x": 24, "y": 9.371484897959178 }, { "x": 25, "y": 10.261339693877547 }, { "x": 26, "y": 11.569194489795914 }, { "x": 27, "y": 13.007049285714283 }, { "x": 28, "y": 13.261904081632649 }, { "x": 29, "y": 13.342758877551017 }, { "x": 30, "y": 14.235613673469384 }, { "x": 31, "y": 12.757468469387753 }, { "x": 32, "y": 10.808323265306118 }, { "x": 33, "y": 10.144178061224487 }, { "x": 34, "y": 9.632032857142853 }, { "x": 35, "y": 8.08388765306122 }, { "x": 36, "y": 9.083742448979589 }, { "x": 37, "y": 9.081597244897957 }, { "x": 38, "y": 8.731452040816324 }, { "x": 39, "y": 8.96630683673469 }, { "x": 40, "y": 8.658161632653059 }, { "x": 41, "y": 8.294016428571426 }, { "x": 42, "y": 8.639871224489792 }, { "x": 43, "y": 8.85172602040816 }, { "x": 44, "y": 8.442580816326528 }, { "x": 45, "y": 9.341435612244895 }, { "x": 46, "y": 8.882290408163264 }, { "x": 47, "y": 10.238145204081631 }, { "x": 48, "y": 10.601999999999999 }, { "x": 49, "y": 11.664854795918366 }, { "x": 50, "y": 13.050709591836732 }, { "x": 51, "y": 14.7295643877551 }, { "x": 52, "y": 14.639419183673468 }, { "x": 53, "y": 13.718273979591835 }, { "x": 54, "y": 13.944128775510205 }, { "x": 55, "y": 12.56198357142857 }, { "x": 56, "y": 13.559838367346938 }, { "x": 57, "y": 11.263693163265305 }, { "x": 58, "y": 11.707547959183673 }, { "x": 59, "y": 10.69940275510204 }, { "x": 60, "y": 9.613257551020407 }, { "x": 61, "y": 10.192112346938774 }, { "x": 62, "y": 10.940967142857142 }, { "x": 63, "y": 9.55782193877551 }, { "x": 64, "y": 10.154676734693876 }, { "x": 65, "y": 10.641531530612244 }, { "x": 66, "y": 9.961386326530612 }, { "x": 67, "y": 9.22724112244898 }, { "x": 68, "y": 10.273095918367346 }, { "x": 69, "y": 10.058950714285714 }, { "x": 70, "y": 9.150805510204082 }, { "x": 71, "y": 11.401660306122448 }, { "x": 72, "y": 11.985515102040816 } ], "min": 8.08388765306122, "max": 14.7295643877551, "mean": 10.795653061224487 }, { "traceNr": 3, "dataId": 3, "traceRef": "[D11]", "label": "24.0:5.0_COS:NONE_0.3", "fill": false, "data": [ { "x": 24, "y": 12.11290857142857 }, { "x": 25, "y": 11.896370714285714 }, { "x": 26, "y": 8.991832857142857 }, { "x": 27, "y": 12.252294999999998 }, { "x": 28, "y": 12.518757142857142 }, { "x": 29, "y": 11.503219285714286 }, { "x": 30, "y": 9.583681428571428 }, { "x": 31, "y": 12.13814357142857 }, { "x": 32, "y": 8.285605714285714 }, { "x": 33, "y": 11.396067857142855 }, { "x": 34, "y": 10.810529999999998 }, { "x": 35, "y": 10.335992142857142 }, { "x": 36, "y": 8.469454285714287 }, { "x": 37, "y": 9.509916428571428 }, { "x": 38, "y": 6.854378571428571 }, { "x": 39, "y": 8.328840714285713 }, { "x": 40, "y": 7.177302857142857 }, { "x": 41, "y": 7.070765 }, { "x": 42, "y": 7.351227142857143 }, { "x": 43, "y": 7.695689285714286 }, { "x": 44, "y": 9.009151428571428 }, { "x": 45, "y": 8.926613571428572 }, { "x": 46, "y": 9.716075714285713 }, { "x": 47, "y": 9.196537857142857 }, { "x": 48, "y": 12.939 }, { "x": 49, "y": 14.305462142857142 }, { "x": 50, "y": 10.888924285714285 }, { "x": 51, "y": 12.938386428571429 }, { "x": 52, "y": 12.17284857142857 }, { "x": 53, "y": 11.846310714285714 }, { "x": 54, "y": 13.024772857142857 }, { "x": 55, "y": 12.367234999999999 }, { "x": 56, "y": 12.537697142857143 }, { "x": 57, "y": 12.026159285714286 }, { "x": 58, "y": 9.955621428571428 }, { "x": 59, "y": 10.857083571428571 }, { "x": 60, "y": 11.516545714285714 }, { "x": 61, "y": 10.274007857142857 }, { "x": 62, "y": 7.7064699999999995 }, { "x": 63, "y": 8.288932142857142 }, { "x": 64, "y": 7.128394285714284 }, { "x": 65, "y": 7.929856428571428 }, { "x": 66, "y": 8.207318571428571 }, { "x": 67, "y": 12.080780714285714 }, { "x": 68, "y": 8.178242857142857 }, { "x": 69, "y": 11.952705 }, { "x": 70, "y": 11.205167142857142 }, { "x": 71, "y": 11.829629285714285 }, { "x": 72, "y": 10.367091428571428 } ], "min": 6.854378571428571, "max": 14.305462142857142, "mean": 10.27869387755102 }, { "traceNr": 4, "dataId": 4, "traceRef": "[E11]", "label": "24.0:5.0_3rd:NONE_0.3", "fill": false, "data": [ { "x": 24, "y": 9.917948571428571 }, { "x": 25, "y": 10.435700714285714 }, { "x": 26, "y": 11.804452857142858 }, { "x": 27, "y": 14.256205 }, { "x": 28, "y": 12.689957142857143 }, { "x": 29, "y": 11.701709285714285 }, { "x": 30, "y": 14.481461428571427 }, { "x": 31, "y": 11.316213571428571 }, { "x": 32, "y": 11.067965714285714 }, { "x": 33, "y": 10.589717857142857 }, { "x": 34, "y": 11.05947 }, { "x": 35, "y": 7.832222142857143 }, { "x": 36, "y": 8.343974285714285 }, { "x": 37, "y": 9.387726428571428 }, { "x": 38, "y": 10.896478571428572 }, { "x": 39, "y": 7.934230714285713 }, { "x": 40, "y": 9.206982857142856 }, { "x": 41, "y": 10.961735000000001 }, { "x": 42, "y": 11.339487142857141 }, { "x": 43, "y": 9.657239285714287 }, { "x": 44, "y": 9.80599142857143 }, { "x": 45, "y": 8.373743571428571 }, { "x": 46, "y": 9.349495714285714 }, { "x": 47, "y": 11.401247857142856 }, { "x": 48, "y": 11.011 }, { "x": 49, "y": 12.126752142857141 }, { "x": 50, "y": 11.896504285714286 }, { "x": 51, "y": 12.600256428571429 }, { "x": 52, "y": 14.439008571428571 }, { "x": 53, "y": 12.841760714285714 }, { "x": 54, "y": 15.975512857142858 }, { "x": 55, "y": 14.959265 }, { "x": 56, "y": 14.109017142857143 }, { "x": 57, "y": 12.010769285714286 }, { "x": 58, "y": 11.250521428571428 }, { "x": 59, "y": 8.86327357142857 }, { "x": 60, "y": 12.837025714285714 }, { "x": 61, "y": 8.618777857142858 }, { "x": 62, "y": 9.64053 }, { "x": 63, "y": 10.379282142857143 }, { "x": 64, "y": 9.671034285714287 }, { "x": 65, "y": 9.510786428571429 }, { "x": 66, "y": 10.359538571428573 }, { "x": 67, "y": 13.202290714285713 }, { "x": 68, "y": 10.424042857142856 }, { "x": 69, "y": 8.789795 }, { "x": 70, "y": 9.635547142857142 }, { "x": 71, "y": 11.038299285714286 }, { "x": 72, "y": 12.799051428571428 } ], "min": 7.832222142857143, "max": 15.975512857142858, "mean": 11.07757142857143 }, { "traceNr": 5, "dataId": 5, "traceRef": "[F11]", "label": "0.0:0.0_NOISE:NONE_0.0", "fill": false, "data": [ { "x": 24, "y": -0.5256204081632652 }, { "x": 25, "y": -0.738886224489796 }, { "x": 26, "y": 0.7018479591836735 }, { "x": 27, "y": -0.11741785714285707 }, { "x": 28, "y": -1.0866836734693879 }, { "x": 29, "y": 0.17005051020408168 }, { "x": 30, "y": -0.23821530612244896 }, { "x": 31, "y": 0.23251887755102044 }, { "x": 32, "y": -0.0017469387755101873 }, { "x": 33, "y": -0.4330127551020408 }, { "x": 34, "y": 0.45972142857142856 }, { "x": 35, "y": -0.13954438775510208 }, { "x": 36, "y": 0.9761897959183674 }, { "x": 37, "y": -0.08407602040816325 }, { "x": 38, "y": 1.201658163265306 }, { "x": 39, "y": 1.0493923469387754 }, { "x": 40, "y": 2.189126530612245 }, { "x": 41, "y": -0.7631392857142856 }, { "x": 42, "y": -1.4734051020408163 }, { "x": 43, "y": 0.5503290816326531 }, { "x": 44, "y": -0.0029367346938775074 }, { "x": 45, "y": -2.173202551020408 }, { "x": 46, "y": 1.1265316326530612 }, { "x": 47, "y": 0.8712658163265306 }, { "x": 48, "y": 0.478 }, { "x": 49, "y": 0.0707341836734694 }, { "x": 50, "y": -0.4195316326530613 }, { "x": 51, "y": -0.24179744897959182 }, { "x": 52, "y": -1.0520632653061224 }, { "x": 53, "y": 1.962670918367347 }, { "x": 54, "y": 0.5914051020408163 }, { "x": 55, "y": -1.3008607142857145 }, { "x": 56, "y": -1.661126530612245 }, { "x": 57, "y": 0.5256076530612245 }, { "x": 58, "y": -1.0176581632653063 }, { "x": 59, "y": -0.2659239795918367 }, { "x": 60, "y": 1.1458102040816327 }, { "x": 61, "y": 1.368544387755102 }, { "x": 62, "y": -0.1357214285714286 }, { "x": 63, "y": -1.5959872448979593 }, { "x": 64, "y": -0.17725306122448986 }, { "x": 65, "y": -1.8315188775510205 }, { "x": 66, "y": 0.36621530612244896 }, { "x": 67, "y": -0.31105051020408164 }, { "x": 68, "y": 0.8476836734693876 }, { "x": 69, "y": -0.09158214285714283 }, { "x": 70, "y": 0.2601520408163265 }, { "x": 71, "y": 0.33388622448979594 }, { "x": 72, "y": 0.8256204081632652 } ], "min": -2.173202551020408, "max": 2.189126530612245, "mean": 0.008673469387755083 }, { "traceNr": 6, "dataId": 6, "traceRef": "[G11]", "label": "24.0:5.0_COS:NONE_0.1", "fill": false, "data": [ { "x": 0, "y": 11.35151781601409 }, { "x": 1, "y": 10.910959185747188 }, { "x": 2, "y": 11.592400555480285 }, { "x": 3, "y": 11.299841925213386 }, { "x": 4, "y": 11.355283294946483 }, { "x": 5, "y": 12.540724664679582 }, { "x": 6, "y": 12.26216603441268 }, { "x": 7, "y": 12.292607404145778 }, { "x": 8, "y": 10.758048773878878 }, { "x": 9, "y": 11.289490143611976 }, { "x": 10, "y": 8.987931513345075 }, { "x": 11, "y": 9.719372883078172 }, { "x": 12, "y": 9.625814252811272 }, { "x": 13, "y": 8.789255622544369 }, { "x": 14, "y": 8.55069699227747 }, { "x": 15, "y": 7.796138362010566 }, { "x": 16, "y": 7.246579731743665 }, { "x": 17, "y": 7.281021101476764 }, { "x": 18, "y": 8.235462471209862 }, { "x": 19, "y": 7.522903840942962 }, { "x": 20, "y": 7.766345210676059 }, { "x": 21, "y": 7.643786580409158 }, { "x": 22, "y": 8.766227950142255 }, { "x": 23, "y": 10.493669319875355 }, { "x": 24, "y": 9.705110689608455 }, { "x": 25, "y": 10.571552059341553 }, { "x": 26, "y": 11.117993429074652 }, { "x": 27, "y": 11.327434798807749 }, { "x": 28, "y": 11.992876168540848 }, { "x": 29, "y": 11.949317538273945 }, { "x": 30, "y": 11.921758908007044 }, { "x": 31, "y": 11.939200277740143 }, { "x": 32, "y": 12.214641647473242 }, { "x": 33, "y": 11.76108301720634 }, { "x": 34, "y": 9.611524386939438 }, { "x": 35, "y": 9.774965756672538 }, { "x": 36, "y": 9.485407126405635 }, { "x": 37, "y": 9.201848496138734 }, { "x": 38, "y": 8.853289865871833 }, { "x": 39, "y": 8.250731235604931 }, { "x": 40, "y": 7.94417260533803 }, { "x": 41, "y": 7.531613975071128 }, { "x": 42, "y": 8.011055344804227 }, { "x": 43, "y": 7.623496714537325 }, { "x": 44, "y": 8.400938084270424 }, { "x": 45, "y": 9.300379454003522 }, { "x": 46, "y": 10.086820823736621 }, { "x": 47, "y": 9.73126219346972 }, { "x": 48, "y": 11.217703563202818 }, { "x": 49, "y": 11.378144932935918 }, { "x": 50, "y": 11.367586302669014 }, { "x": 51, "y": 12.218027672402114 }, { "x": 52, "y": 11.71346904213521 }, { "x": 53, "y": 11.96791041186831 }, { "x": 54, "y": 12.00235178160141 }, { "x": 55, "y": 12.355793151334508 }, { "x": 56, "y": 11.668234521067607 }, { "x": 57, "y": 11.575675890800705 }, { "x": 58, "y": 11.440117260533803 }, { "x": 59, "y": 10.183558630266901 }, { "x": 60, "y": 8.976 }, { "x": 61, "y": 8.373441369733099 }, { "x": 62, "y": 7.339882739466197 }, { "x": 63, "y": 7.103324109199296 }, { "x": 64, "y": 7.739765478932394 }, { "x": 65, "y": 7.633206848665493 }, { "x": 66, "y": 7.577648218398592 }, { "x": 67, "y": 8.012089588131689 }, { "x": 68, "y": 8.82453095786479 }, { "x": 69, "y": 9.629972327597887 }, { "x": 70, "y": 8.950413697330985 }, { "x": 71, "y": 9.727855067064084 }, { "x": 72, "y": 10.479296436797183 }, { "x": 73, "y": 10.71873780653028 }, { "x": 74, "y": 11.778179176263379 }, { "x": 75, "y": 11.517620545996479 }, { "x": 76, "y": 12.999061915729577 }, { "x": 77, "y": 13.884503285462674 }, { "x": 78, "y": 13.398944655195773 }, { "x": 79, "y": 12.670386024928872 }, { "x": 80, "y": 11.56882739466197 }, { "x": 81, "y": 11.81926876439507 }, { "x": 82, "y": 10.689710134128166 }, { "x": 83, "y": 9.781151503861265 }, { "x": 84, "y": 9.699592873594366 }, { "x": 85, "y": 9.033034243327462 }, { "x": 86, "y": 8.262475613060563 }, { "x": 87, "y": 8.336916982793658 }, { "x": 88, "y": 7.211358352526759 }, { "x": 89, "y": 7.472799722259857 }, { "x": 90, "y": 8.117241091992955 }, { "x": 91, "y": 7.8686824617260545 }, { "x": 92, "y": 8.377123831459151 }, { "x": 93, "y": 9.16056520119225 }, { "x": 94, "y": 9.75800657092535 }, { "x": 95, "y": 9.949447940658448 }, { "x": 96, "y": 11.287889310391545 }, { "x": 97, "y": 11.845330680124645 }, { "x": 98, "y": 12.045772049857744 }, { "x": 99, "y": 12.459213419590842 }, { "x": 100, "y": 14.092654789323941 }, { "x": 101, "y": 13.759096159057039 }, { "x": 102, "y": 12.749537528790137 }, { "x": 103, "y": 13.254978898523236 }, { "x": 104, "y": 11.645420268256334 }, { "x": 105, "y": 11.996861637989433 }, { "x": 106, "y": 11.02630300772253 }, { "x": 107, "y": 9.313744377455631 }, { "x": 108, "y": 9.665185747188728 }, { "x": 109, "y": 9.037627116921827 }, { "x": 110, "y": 8.854068486654924 }, { "x": 111, "y": 9.720509856388023 }, { "x": 112, "y": 7.707951226121121 }, { "x": 113, "y": 6.620392595854221 }, { "x": 114, "y": 7.945833965587319 }, { "x": 115, "y": 8.814275335320417 }, { "x": 116, "y": 8.410716705053517 }, { "x": 117, "y": 9.530158074786614 }, { "x": 118, "y": 9.734599444519715 }, { "x": 119, "y": 10.694040814252812 }, { "x": 120, "y": 11.04348218398591 } ], "min": 6.620392595854221, "max": 14.092654789323941, "mean": 10.075801652892563 }, { "traceNr": 7, "dataId": 7, "traceRef": "[H11]", "label": "24.0:5.0_3rd:NONE_0.1", "fill": false, "data": [ { "x": 0, "y": 10.338396152282886 }, { "x": 1, "y": 10.99162288307817 }, { "x": 2, "y": 11.122849613873456 }, { "x": 3, "y": 13.555076344668743 }, { "x": 4, "y": 12.688303075464027 }, { "x": 5, "y": 13.282529806259312 }, { "x": 6, "y": 13.678756537054598 }, { "x": 7, "y": 13.008983267849882 }, { "x": 8, "y": 12.342209998645167 }, { "x": 9, "y": 11.221436729440454 }, { "x": 10, "y": 10.819663460235738 }, { "x": 11, "y": 9.588890191031023 }, { "x": 12, "y": 9.807116921826308 }, { "x": 13, "y": 9.647343652621593 }, { "x": 14, "y": 9.158570383416878 }, { "x": 15, "y": 9.392797114212165 }, { "x": 16, "y": 8.565023845007449 }, { "x": 17, "y": 9.573250575802735 }, { "x": 18, "y": 9.67147730659802 }, { "x": 19, "y": 8.688704037393304 }, { "x": 20, "y": 10.33293076818859 }, { "x": 21, "y": 8.284157498983877 }, { "x": 22, "y": 10.326384229779162 }, { "x": 23, "y": 9.867610960574446 }, { "x": 24, "y": 9.921837691369731 }, { "x": 25, "y": 10.760064422165016 }, { "x": 26, "y": 12.391291152960301 }, { "x": 27, "y": 13.309517883755587 }, { "x": 28, "y": 14.519744614550872 }, { "x": 29, "y": 12.826971345346157 }, { "x": 30, "y": 13.705198076141443 }, { "x": 31, "y": 12.627424806936727 }, { "x": 32, "y": 12.317651537732013 }, { "x": 33, "y": 10.907878268527298 }, { "x": 34, "y": 10.258104999322583 }, { "x": 35, "y": 10.249331730117868 }, { "x": 36, "y": 8.863558460913154 }, { "x": 37, "y": 8.810785191708439 }, { "x": 38, "y": 8.141011922503726 }, { "x": 39, "y": 9.49523865329901 }, { "x": 40, "y": 9.229465384094295 }, { "x": 41, "y": 9.219692114889579 }, { "x": 42, "y": 9.512918845684865 }, { "x": 43, "y": 8.41614557648015 }, { "x": 44, "y": 9.867372307275437 }, { "x": 45, "y": 8.708599038070721 }, { "x": 46, "y": 11.272825768866007 }, { "x": 47, "y": 9.09905249966129 }, { "x": 48, "y": 10.291279230456576 }, { "x": 49, "y": 11.43350596125186 }, { "x": 50, "y": 12.704732692047147 }, { "x": 51, "y": 12.577959422842433 }, { "x": 52, "y": 13.803186153637718 }, { "x": 53, "y": 14.085412884433001 }, { "x": 54, "y": 13.052639615228287 }, { "x": 55, "y": 13.992866346023572 }, { "x": 56, "y": 12.371093076818859 }, { "x": 57, "y": 11.326319807614144 }, { "x": 58, "y": 10.328546538409428 }, { "x": 59, "y": 10.683773269204714 }, { "x": 60, "y": 10.293999999999999 }, { "x": 61, "y": 10.395226730795285 }, { "x": 62, "y": 8.84845346159057 }, { "x": 63, "y": 9.796680192385855 }, { "x": 64, "y": 9.06090692318114 }, { "x": 65, "y": 9.231133653976425 }, { "x": 66, "y": 10.17836038477171 }, { "x": 67, "y": 10.164587115566997 }, { "x": 68, "y": 10.463813846362282 }, { "x": 69, "y": 9.570040577157567 }, { "x": 70, "y": 9.53526730795285 }, { "x": 71, "y": 9.998494038748136 }, { "x": 72, "y": 10.716720769543421 }, { "x": 73, "y": 11.107947500338707 }, { "x": 74, "y": 12.474174231133992 }, { "x": 75, "y": 13.768400961929277 }, { "x": 76, "y": 13.893627692724563 }, { "x": 77, "y": 13.860854423519847 }, { "x": 78, "y": 13.315081154315132 }, { "x": 79, "y": 13.445307885110418 }, { "x": 80, "y": 12.990534615905704 }, { "x": 81, "y": 11.591761346700988 }, { "x": 82, "y": 11.859988077496274 }, { "x": 83, "y": 9.781214808291558 }, { "x": 84, "y": 9.761441539086844 }, { "x": 85, "y": 9.70266826988213 }, { "x": 86, "y": 9.093895000677415 }, { "x": 87, "y": 9.4631217314727 }, { "x": 88, "y": 9.546348462267984 }, { "x": 89, "y": 9.80857519306327 }, { "x": 90, "y": 9.009801923858555 }, { "x": 91, "y": 9.78902865465384 }, { "x": 92, "y": 9.886255385449125 }, { "x": 93, "y": 9.29648211624441 }, { "x": 94, "y": 9.733708847039695 }, { "x": 95, "y": 10.482935577834981 }, { "x": 96, "y": 10.756162308630268 }, { "x": 97, "y": 13.041389039425551 }, { "x": 98, "y": 13.703615770220837 }, { "x": 99, "y": 14.362842501016122 }, { "x": 100, "y": 14.303069231811406 }, { "x": 101, "y": 14.866295962606692 }, { "x": 102, "y": 13.81852269340198 }, { "x": 103, "y": 14.086749424197263 }, { "x": 104, "y": 11.187976154992548 }, { "x": 105, "y": 11.700202885787833 }, { "x": 106, "y": 11.481429616583117 }, { "x": 107, "y": 10.609656347378403 }, { "x": 108, "y": 10.49188307817369 }, { "x": 109, "y": 9.795109808968975 }, { "x": 110, "y": 9.22833653976426 }, { "x": 111, "y": 8.783563270559544 }, { "x": 112, "y": 9.41679000135483 }, { "x": 113, "y": 10.570016732150114 }, { "x": 114, "y": 9.4452434629454 }, { "x": 115, "y": 9.726470193740687 }, { "x": 116, "y": 9.271696924535972 }, { "x": 117, "y": 9.544923655331255 }, { "x": 118, "y": 9.95415038612654 }, { "x": 119, "y": 10.635377116921825 }, { "x": 120, "y": 11.755603847717111 } ], "min": 8.141011922503726, "max": 14.866295962606692, "mean": 10.9214132231405 }, { "traceNr": 8, "dataId": 8, "traceRef": "[I11]", "label": "24.0:5.0_COS:NONE_0.3", "fill": false, "data": [ { "x": 0, "y": 10.27194607776724 }, { "x": 1, "y": 13.064763643137784 }, { "x": 2, "y": 10.00758120850833 }, { "x": 3, "y": 13.206398773878878 }, { "x": 4, "y": 15.088216339249424 }, { "x": 5, "y": 10.153033904619969 }, { "x": 6, "y": 12.854851469990514 }, { "x": 7, "y": 11.516669035361062 }, { "x": 8, "y": 13.149486600731606 }, { "x": 9, "y": 11.599304166102154 }, { "x": 10, "y": 8.8071217314727 }, { "x": 11, "y": 11.274939296843245 }, { "x": 12, "y": 6.111756862213791 }, { "x": 13, "y": 9.227574427584337 }, { "x": 14, "y": 10.186391992954883 }, { "x": 15, "y": 11.90920955832543 }, { "x": 16, "y": 8.073027123695974 }, { "x": 17, "y": 5.056844689066521 }, { "x": 18, "y": 6.090662254437067 }, { "x": 19, "y": 8.619479819807612 }, { "x": 20, "y": 6.17929738517816 }, { "x": 21, "y": 6.326114950548705 }, { "x": 22, "y": 9.768932515919252 }, { "x": 23, "y": 7.542750081289798 }, { "x": 24, "y": 10.177567646660343 }, { "x": 25, "y": 10.09638521203089 }, { "x": 26, "y": 13.479202777401435 }, { "x": 27, "y": 12.379020342771982 }, { "x": 28, "y": 12.901837908142529 }, { "x": 29, "y": 10.678655473513073 }, { "x": 30, "y": 11.79047303888362 }, { "x": 31, "y": 12.836290604254165 }, { "x": 32, "y": 9.370108169624713 }, { "x": 33, "y": 12.794925734995259 }, { "x": 34, "y": 11.908743300365803 }, { "x": 35, "y": 8.74956086573635 }, { "x": 36, "y": 9.039378431106895 }, { "x": 37, "y": 7.941195996477443 }, { "x": 38, "y": 11.052013561847989 }, { "x": 39, "y": 6.958831127218534 }, { "x": 40, "y": 7.23864869258908 }, { "x": 41, "y": 9.226466257959625 }, { "x": 42, "y": 9.628283823330172 }, { "x": 43, "y": 7.601101388700719 }, { "x": 44, "y": 7.141918954071265 }, { "x": 45, "y": 8.319736519441811 }, { "x": 46, "y": 7.454554084812356 }, { "x": 47, "y": 9.637371650182901 }, { "x": 48, "y": 8.727189215553448 }, { "x": 49, "y": 11.984006780923995 }, { "x": 50, "y": 13.60782434629454 }, { "x": 51, "y": 10.579641911665087 }, { "x": 52, "y": 10.766459477035632 }, { "x": 53, "y": 12.275277042406179 }, { "x": 54, "y": 14.354094607776725 }, { "x": 55, "y": 12.598912173147271 }, { "x": 56, "y": 12.790729738517816 }, { "x": 57, "y": 13.007547303888362 }, { "x": 58, "y": 11.21536486925891 }, { "x": 59, "y": 10.415182434629454 }, { "x": 60, "y": 9.616000000000001 }, { "x": 61, "y": 10.820817565370547 }, { "x": 62, "y": 7.5086351307410935 }, { "x": 63, "y": 7.610452696111639 }, { "x": 64, "y": 9.600270261482185 }, { "x": 65, "y": 8.56508782685273 }, { "x": 66, "y": 7.037905392223277 }, { "x": 67, "y": 7.017722957593824 }, { "x": 68, "y": 8.29354052296437 }, { "x": 69, "y": 10.451358088334915 }, { "x": 70, "y": 10.42617565370546 }, { "x": 71, "y": 7.165993219076007 }, { "x": 72, "y": 12.790810784446553 }, { "x": 73, "y": 12.0856283498171 }, { "x": 74, "y": 8.909445915187645 }, { "x": 75, "y": 12.71526348055819 }, { "x": 76, "y": 10.268081045928739 }, { "x": 77, "y": 13.706898611299284 }, { "x": 78, "y": 11.821716176669831 }, { "x": 79, "y": 12.535533742040375 }, { "x": 80, "y": 11.956351307410921 }, { "x": 81, "y": 11.025168872781467 }, { "x": 82, "y": 13.676986438152014 }, { "x": 83, "y": 11.93380400352256 }, { "x": 84, "y": 6.718621568893106 }, { "x": 85, "y": 9.120439134263652 }, { "x": 86, "y": 6.929256699634197 }, { "x": 87, "y": 8.680074265004743 }, { "x": 88, "y": 10.065891830375291 }, { "x": 89, "y": 6.947709395745836 }, { "x": 90, "y": 5.253526961116382 }, { "x": 91, "y": 9.061344526486929 }, { "x": 92, "y": 8.166162091857474 }, { "x": 93, "y": 7.938979657228019 }, { "x": 94, "y": 10.976797222598567 }, { "x": 95, "y": 8.563614787969112 }, { "x": 96, "y": 13.868432353339658 }, { "x": 97, "y": 10.972249918710204 }, { "x": 98, "y": 9.13206748408075 }, { "x": 99, "y": 11.942885049451297 }, { "x": 100, "y": 14.776702614821842 }, { "x": 101, "y": 14.39652018019239 }, { "x": 102, "y": 14.462337745562934 }, { "x": 103, "y": 12.77215531093348 }, { "x": 104, "y": 12.714972876304026 }, { "x": 105, "y": 11.373790441674572 }, { "x": 106, "y": 9.02360800704512 }, { "x": 107, "y": 12.852425572415665 }, { "x": 108, "y": 12.12324313778621 }, { "x": 109, "y": 9.499060703156758 }, { "x": 110, "y": 10.393878268527303 }, { "x": 111, "y": 7.5286958338978485 }, { "x": 112, "y": 8.815513399268395 }, { "x": 113, "y": 5.077330964638941 }, { "x": 114, "y": 8.391148530009488 }, { "x": 115, "y": 7.607966095380033 }, { "x": 116, "y": 9.89678366075058 }, { "x": 117, "y": 9.766601226121125 }, { "x": 118, "y": 11.066418791491671 }, { "x": 119, "y": 9.224236356862217 }, { "x": 120, "y": 12.307053922232763 } ], "min": 5.056844689066521, "max": 15.088216339249424, "mean": 10.188090909090914 }, { "traceNr": 9, "dataId": 9, "traceRef": "[J11]", "label": "24.0:5.0_3rd:NONE_0.3", "fill": false, "data": [ { "x": 0, "y": 12.164925484351715 }, { "x": 1, "y": 9.998560059612517 }, { "x": 2, "y": 11.120194634873323 }, { "x": 3, "y": 12.516829210134127 }, { "x": 4, "y": 15.055463785394933 }, { "x": 5, "y": 15.452098360655738 }, { "x": 6, "y": 12.079732935916542 }, { "x": 7, "y": 13.359367511177346 }, { "x": 8, "y": 11.161002086438153 }, { "x": 9, "y": 11.459636661698957 }, { "x": 10, "y": 9.421271236959761 }, { "x": 11, "y": 9.890905812220566 }, { "x": 12, "y": 10.286540387481372 }, { "x": 13, "y": 6.063174962742176 }, { "x": 14, "y": 7.539809538002981 }, { "x": 15, "y": 9.186444113263784 }, { "x": 16, "y": 8.94807868852459 }, { "x": 17, "y": 8.951713263785395 }, { "x": 18, "y": 8.8703478390462 }, { "x": 19, "y": 8.414982414307005 }, { "x": 20, "y": 9.30261698956781 }, { "x": 21, "y": 7.775251564828613 }, { "x": 22, "y": 8.76488614008942 }, { "x": 23, "y": 7.507520715350223 }, { "x": 24, "y": 12.835155290611029 }, { "x": 25, "y": 12.687789865871833 }, { "x": 26, "y": 12.823424441132639 }, { "x": 27, "y": 11.995059016393443 }, { "x": 28, "y": 12.907693591654247 }, { "x": 29, "y": 14.724328166915052 }, { "x": 30, "y": 12.199962742175858 }, { "x": 31, "y": 13.84059731743666 }, { "x": 32, "y": 11.207231892697466 }, { "x": 33, "y": 9.608866467958272 }, { "x": 34, "y": 9.770501043219076 }, { "x": 35, "y": 10.175135618479882 }, { "x": 36, "y": 7.316770193740686 }, { "x": 37, "y": 9.64140476900149 }, { "x": 38, "y": 5.898039344262295 }, { "x": 39, "y": 7.9746739195231005 }, { "x": 40, "y": 9.232308494783904 }, { "x": 41, "y": 8.21694307004471 }, { "x": 42, "y": 10.055577645305513 }, { "x": 43, "y": 7.760212220566318 }, { "x": 44, "y": 7.993846795827123 }, { "x": 45, "y": 9.812481371087928 }, { "x": 46, "y": 9.357115946348733 }, { "x": 47, "y": 9.240750521609538 }, { "x": 48, "y": 8.038385096870343 }, { "x": 49, "y": 11.475019672131149 }, { "x": 50, "y": 12.283654247391953 }, { "x": 51, "y": 10.529288822652758 }, { "x": 52, "y": 15.075923397913561 }, { "x": 53, "y": 13.603557973174368 }, { "x": 54, "y": 14.71919254843517 }, { "x": 55, "y": 11.724827123695977 }, { "x": 56, "y": 13.040461698956781 }, { "x": 57, "y": 12.541096274217587 }, { "x": 58, "y": 11.98873084947839 }, { "x": 59, "y": 12.077365424739194 }, { "x": 60, "y": 10.603 }, { "x": 61, "y": 8.971634575260806 }, { "x": 62, "y": 8.27426915052161 }, { "x": 63, "y": 9.770903725782414 }, { "x": 64, "y": 9.99353830104322 }, { "x": 65, "y": 9.534172876304023 }, { "x": 66, "y": 8.856807451564828 }, { "x": 67, "y": 10.582442026825632 }, { "x": 68, "y": 8.758076602086438 }, { "x": 69, "y": 9.104711177347243 }, { "x": 70, "y": 9.603345752608048 }, { "x": 71, "y": 9.371980327868853 }, { "x": 72, "y": 11.542614903129657 }, { "x": 73, "y": 11.324249478390461 }, { "x": 74, "y": 11.177884053651267 }, { "x": 75, "y": 15.763518628912072 }, { "x": 76, "y": 16.302153204172875 }, { "x": 77, "y": 13.05578777943368 }, { "x": 78, "y": 12.574422354694486 }, { "x": 79, "y": 12.70205692995529 }, { "x": 80, "y": 12.629691505216096 }, { "x": 81, "y": 10.8863260804769 }, { "x": 82, "y": 10.212960655737705 }, { "x": 83, "y": 11.63959523099851 }, { "x": 84, "y": 9.041229806259315 }, { "x": 85, "y": 8.84786438152012 }, { "x": 86, "y": 7.753498956780925 }, { "x": 87, "y": 10.466133532041729 }, { "x": 88, "y": 8.436768107302534 }, { "x": 89, "y": 9.437402682563338 }, { "x": 90, "y": 8.374037257824144 }, { "x": 91, "y": 8.679671833084948 }, { "x": 92, "y": 8.910306408345752 }, { "x": 93, "y": 10.199940983606558 }, { "x": 94, "y": 9.979575558867362 }, { "x": 95, "y": 9.776210134128167 }, { "x": 96, "y": 10.52184470938897 }, { "x": 97, "y": 12.128479284649776 }, { "x": 98, "y": 11.91711385991058 }, { "x": 99, "y": 14.168748435171386 }, { "x": 100, "y": 12.260383010432191 }, { "x": 101, "y": 12.164017585692996 }, { "x": 102, "y": 14.7406521609538 }, { "x": 103, "y": 14.911286736214606 }, { "x": 104, "y": 9.96692131147541 }, { "x": 105, "y": 7.9395558867362155 }, { "x": 106, "y": 12.093190461997018 }, { "x": 107, "y": 8.243825037257825 }, { "x": 108, "y": 9.529459612518629 }, { "x": 109, "y": 10.138094187779435 }, { "x": 110, "y": 9.053728763040239 }, { "x": 111, "y": 10.231363338301044 }, { "x": 112, "y": 7.706997913561848 }, { "x": 113, "y": 7.871632488822653 }, { "x": 114, "y": 8.279267064083458 }, { "x": 115, "y": 9.931901639344263 }, { "x": 116, "y": 12.111536214605067 }, { "x": 117, "y": 9.018170789865872 }, { "x": 118, "y": 12.018805365126676 }, { "x": 119, "y": 12.110439940387481 }, { "x": 120, "y": 13.136074515648286 } ], "min": 5.898039344262295, "max": 16.302153204172875, "mean": 10.619809917355374 }, { "traceNr": 10, "dataId": 10, "traceRef": "[K11]", "label": "0.0:0.0_NOISE:NONE_0.0", "fill": false, "data": [ { "x": 0, "y": -0.08863582170437613 }, { "x": 1, "y": -0.8373918913426365 }, { "x": 2, "y": 0.25485203901910314 }, { "x": 3, "y": -0.5589040306191574 }, { "x": 4, "y": -0.4696601002574178 }, { "x": 5, "y": -0.08941616989567812 }, { "x": 6, "y": 0.15882776046606145 }, { "x": 7, "y": -1.4289283091721987 }, { "x": 8, "y": 0.08431562118954068 }, { "x": 9, "y": 1.1065595515512803 }, { "x": 10, "y": -0.2061965180869801 }, { "x": 11, "y": 0.06404741227475949 }, { "x": 12, "y": 0.2052913426364991 }, { "x": 13, "y": 0.3105352729982387 }, { "x": 14, "y": 1.0217792033599784 }, { "x": 15, "y": -0.9949768662782821 }, { "x": 16, "y": 0.2832670640834575 }, { "x": 17, "y": -0.922489005554803 }, { "x": 18, "y": 2.0497549248069364 }, { "x": 19, "y": 2.458998855168676 }, { "x": 20, "y": 0.7102427855304159 }, { "x": 21, "y": 1.0574867158921555 }, { "x": 22, "y": 0.7407306462538951 }, { "x": 23, "y": -2.2700254233843657 }, { "x": 24, "y": 0.6572185069773743 }, { "x": 25, "y": -0.25753756266088607 }, { "x": 26, "y": -0.12529363229914647 }, { "x": 27, "y": -1.9110497019374069 }, { "x": 28, "y": 0.9691942284243327 }, { "x": 29, "y": -0.6365618412139277 }, { "x": 30, "y": -1.158317910852188 }, { "x": 31, "y": 0.4939260195095515 }, { "x": 32, "y": 0.38716994987129116 }, { "x": 33, "y": -0.4545861197669693 }, { "x": 34, "y": 0.7816578105947704 }, { "x": 35, "y": -0.4390982590434901 }, { "x": 36, "y": 2.1561456713182494 }, { "x": 37, "y": -0.4366103983200108 }, { "x": 38, "y": -0.9293664679582713 }, { "x": 39, "y": 1.7238774624034685 }, { "x": 40, "y": -1.241878607234792 }, { "x": 41, "y": 0.08636532312694756 }, { "x": 42, "y": 0.7786092534886871 }, { "x": 43, "y": -1.1871468161495733 }, { "x": 44, "y": 0.17909711421216637 }, { "x": 45, "y": 0.552341044573906 }, { "x": 46, "y": 1.1605849749356456 }, { "x": 47, "y": -1.6081710947026147 }, { "x": 48, "y": 1.6220728356591247 }, { "x": 49, "y": -1.5666832339791357 }, { "x": 50, "y": 0.8895606963826039 }, { "x": 51, "y": 1.6008046267443437 }, { "x": 52, "y": 1.0330485571060832 }, { "x": 53, "y": 1.066292487467823 }, { "x": 54, "y": -2.082463582170438 }, { "x": 55, "y": -1.833219651808698 }, { "x": 56, "y": 0.9880242785530416 }, { "x": 57, "y": -0.10973179108521881 }, { "x": 58, "y": -1.186487860723479 }, { "x": 59, "y": 1.0387560696382605 }, { "x": 60, "y": 0.43599999999999994 }, { "x": 61, "y": 0.41524393036173957 }, { "x": 62, "y": -0.5215121392765208 }, { "x": 63, "y": 0.3517317910852188 }, { "x": 64, "y": -0.37602427855304155 }, { "x": 65, "y": -0.453780348191302 }, { "x": 66, "y": 1.1644635821704377 }, { "x": 67, "y": -0.7732924874678229 }, { "x": 68, "y": 1.061951442893917 }, { "x": 69, "y": -0.3058046267443436 }, { "x": 70, "y": 1.6064393036173963 }, { "x": 71, "y": 0.11168323397913563 }, { "x": 72, "y": -0.22807283565912478 }, { "x": 73, "y": 2.235171094702615 }, { "x": 74, "y": 0.17241502506435444 }, { "x": 75, "y": 2.125658955426094 }, { "x": 76, "y": 0.2699028857878336 }, { "x": 77, "y": -0.4078531838504268 }, { "x": 78, "y": -0.2606092534886872 }, { "x": 79, "y": -0.14636532312694756 }, { "x": 80, "y": -0.7281213927652079 }, { "x": 81, "y": 1.0121225375965317 }, { "x": 82, "y": 0.3673664679582712 }, { "x": 83, "y": -1.3183896016799892 }, { "x": 84, "y": -1.2311456713182496 }, { "x": 85, "y": 0.40509825904349006 }, { "x": 86, "y": -0.6936578105947703 }, { "x": 87, "y": 0.2625861197669692 }, { "x": 88, "y": -0.24216994987129115 }, { "x": 89, "y": 0.2940739804904484 }, { "x": 90, "y": 0.499317910852188 }, { "x": 91, "y": -0.36843815878607233 }, { "x": 92, "y": -1.0381942284243326 }, { "x": 93, "y": -0.4099502980625931 }, { "x": 94, "y": 0.24929363229914644 }, { "x": 95, "y": -0.796462437339114 }, { "x": 96, "y": -0.6722185069773744 }, { "x": 97, "y": 1.7370254233843654 }, { "x": 98, "y": -0.1697306462538951 }, { "x": 99, "y": -0.03948671589215552 }, { "x": 100, "y": 0.8217572144695842 }, { "x": 101, "y": 0.1310011448313237 }, { "x": 102, "y": -0.25875492480693674 }, { "x": 103, "y": -1.402510994445197 }, { "x": 104, "y": -0.9862670640834575 }, { "x": 105, "y": -0.2050231337217179 }, { "x": 106, "y": 2.4222207966400218 }, { "x": 107, "y": 0.4494647270017613 }, { "x": 108, "y": 0.933708657363501 }, { "x": 109, "y": 0.7789525877252405 }, { "x": 110, "y": 1.14119651808698 }, { "x": 111, "y": -0.8215595515512802 }, { "x": 112, "y": -1.8973156211895406 }, { "x": 113, "y": 1.770928309172199 }, { "x": 114, "y": 0.9141722395339386 }, { "x": 115, "y": 0.16541616989567812 }, { "x": 116, "y": -1.3893398997425823 }, { "x": 117, "y": -0.053095969380842684 }, { "x": 118, "y": 0.6701479609808969 }, { "x": 119, "y": 0.7653918913426365 }, { "x": 120, "y": -1.8813641782956236 } ], "min": -2.2700254233843657, "max": 2.458998855168676, "mean": 0.0769090909090909 } ]
`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bd2-ngx-heatmap';

  data: Serie[] = JSON.parse(dataJson);
}
