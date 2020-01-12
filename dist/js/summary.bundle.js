/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "../";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/summary.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/img/Praetura-Ventures-logo_white_rgb_small1.png":
/*!********************************************************************!*\
  !*** ./src/assets/img/Praetura-Ventures-logo_white_rgb_small1.png ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAABbCAYAAADJLbi4AAAaMUlEQVR4nO2dCZQWxbXH7wyLMMKI7IKCsrmg4gKKCyq4YBB9iAYUN2LUoKJJNE+N0YcbUVxi3FdERMFdQVQCgqgQF9yDoghoXFhGQUBHZJubUy//9rRtV3dt/X39DfU7p8/ATHXV7e7q21W3bt1bxszk8RSQEUR0GRF9ldBkWyK6l4hO9w/GE6auvxueArMlmmub0mwz/2A8Ucr9HfEUGNUhvR/6e36BV1gej6dk8ArL4/GUDF5heTyeksErLI/HUzJ4heXxeEoGr7A8Hk/J4BWWx+MpGbJ2HC2HP01t9KkR964DEe1MRHsQUUsiqiSiBkRUh4g2ENEPRLSaiKqI6G0i+piIFhHRuhzIHyCeURkRbSxQe4VqxxOPeNbbEtFORLQnHHgbE1FDIqqHfrsm1G/fQb/9FP25qLhUWK2I6Egi2peIWhPR1kTUAi/nYiJagp8ziGgaEX1X5GvfhYhOJKJdiWgbPDAh69dEtIyI5hPRs0T0euglE8roGCLqT0S9cc26LCeiV4hoKhE9RURLC3jNHYnocCLqDtlbQdGKfvANZBHX/y8i+gcRvZeBgimzOLcCH4ct8AJ96FCuUqELEZ2Mfrs17sUGPLel+CC+QESzQgpGfECPJqIBRHQA+rsu1ahTvL+PENG/i3K/mPlZZl7JzPMkxzpmvknsOZQcRzPzbNajhpknMXOvhHqTjn2YeQUzf5Ig90ZmHhFTx/7M/I6GtFeHzp2seZ0qzGTmgw3vg8rRlJkvYeZFBrItZeZbmXlnjfbOw/ONeybvMvNyxbafiNR7OjN/Hykj6usSKXdRQvvBsYGZR1re1/7MXM3M8xPaWYn3KzinFTN/wMxfGbxv4jpf1Hh240LnTtI4T5VXmfmIDPtt7EG44WlMijn5CNx4W95i5m6agh+s2OZdkfPuNJD1ktD5H7h62jG8x8y7Ony4mzHz3xzKN42ZOyq0e42j9sIK6/qUsnuHyv5dsf6xlvf3JMV25oXO2Rof0jSi79sFim2FuSd0/psG56uykJkPLZTCKlcc8q8P/bsdEb1JRJOJqI2DQZ4Y4r9LRGMd1BUlfG0zieh3BnW8h59NiKi9exF/Yle09VcHdf2KiFYQ0R8dySY4hIgWENFVKeVc2yt7ENH5KWXuNWjfdqprcr6qPTf8vo0holEGbS0L/bvS4HxVOsC88VCGbfyE6irhBvw8DnPXPTOQ5WTYJdJ28etQjbLPE9GBhnUsx09h/9ncoWwy/gzbmSnXE9FzsPdkwV/wwdoi4/sQvNhHK5QVCx97ZyxPIfkRbY0joqGG7Qbhe4RttmkBZB9CRHNhwM8MVYUlDLKnEdGELIXB6sV8dEAXVGFUdbhFXd/iZwtHMqnQj4heNjhvisJoxAV7wri7Q4ZtBB/JPRTLd85QlkLzORENxqKQKQtw3paYHRSCrkT0BhHVz6otVYUltPxtBbpoMTJ4DUNNW05GwDhTxLB/Fc5tXqDrD+hFRPdrlBdT9L7ZivQzmmIqn5XSCvqm6irqNxnJUQwGYKRsw0qc2wWrhIViB6wiZoKqwqrIUmvGIKZejzuoR4zUtrI4/3v4o1DGdgAZpygqoWuI6IgiyLcZEU2E/45rgpdshkK9wm/orewus+DsAJcFG4rZbwfAfOScPEcc3Z2IbiKi3xdRhk+htCghAuZcTGNXo+xa3NcKzOd3JKJuFjL8H3yiZIjp7oUW9dsivuB3E9FvMqr/AUxzd00ocy38kDz/ZV3IlCHrt6Jvv4/FmWqcUw6b1+ZQmt0t7uclRPSw6+fhUmGJi/4nhvA1+Op2w7zWlHOJ6EkiesmhnAEf4GV4CbaujXAM7YLRyrCQsqLQdQiD8zNENJ2IPgoZ5ZMQdoTDiOg8ItpLU07hiHsonG2jiHt8u8G1L4O963MYZ9djJLoVpqJJyiGOoRhpPW3pGCrjcDynODvVdYgRv6mwACvqM+GMvR6zn8Ap+A+w/wVTwmAlXyinSRixfoRz06jE6vC5BotWXeFk/YTT5wI/ERsmwy+qnsR3ojUzn83MXxi28a6FH1YcCxUdVrdj5r6h/5/CzD0d+JL01nCeDLhdUtcVmvUsgsNjmozCSfFRzbo/xLntmPk3zDwwcggH4x7M/IxifVHHUXGcyMxPMfMUZr6XmbvHlLlRsf77LJ/jEMV2wn5YbeG0asJqZj5WQa6WeMb18f/DmPlwB/12J2b+WFPuGa79sGwU1nxND2hxDDNs63RHCmuC6xtoeFRqPvy5Me00Y+ZVGnWMMpD1AM02zlCo82rFuuIUlspRGxXWHGauyEnfna4ht/gwb+6yfdNoDWMwdZqred6dGLqqDEfDnKEv4i8Q8+njHdTjgtXYd1mjWFeHmFXKoRoG1T8b2rlexnNWXak7U6FMAwM5NmXehvNs0TceA7GP9gvFsk0huzNMFJZQOqdaCLAIxjwV20+AKN/Tos35lj4tWSBkulSx3obYXR/mFMVzn8AqoinLFJ03BbsR0UFZ3rRNDLH6OTBnl7xG0/PepSO4tsJ6RfErmsZiGOR00C0f5qKchjV5TqNso9C/uyPahAqXOJDzNQ3jfiF9wWo75xYtKkIyz2uUdbrjQneV8A8O2xarPrcS0XDF8vsatjMHYVyyQkzV9sEKW5PQPV2LlZoVGNbHdbyPsByv4kUf/rjsp3gtE9GGC0YT0VkK9RyCKajHjkWRPZKuaYR+1B7brAJfuvUwWSxHLKyFMQ1/iZX1lgpCOfXR01FYj+LFc8mNRHS24lJ4D8TZ0o0fleTDZEoF7Gri2F5xpCpGlS9CSb+G360L7RtLI7xpVlV5T3J4zW/DFSTNTSXYc1mdUs6TzMQM7o+wH56A7WrdFJ3Bxfs2m4juwSZnhlJbq9im083wOgorC3f7Rdjo21+hbD3Mh3UV1guGssUhjNwjNUaFYdqgs5wA36f/xT1do1lPHY0R1mHwAbPdVrQRcqpsbN0StqzZlm1u6rzp8PqFDfRy+AHqbtNpDXPMMRh5XQLlVZQPkqrC+gaOhlkwRVFhERSW7hYM3RVJGcNgx3HhGCmuYzyUn24EiLYahszBOApNO6+wrFFdiUvjKCJ6zNHWOvHBvhkrzkVZ7VVVWJ9luKz6iUbZ7Q3qX69QJg3xwI91UE+U7QzOyTqsiwuKsX+ttuHifbsWI3nXOF3500FVYbkapcTxsUbZTGPtSHgOAfHyQlZxrlxSCjLmHdsIC7cpLpKUFKpuDaoGNhN+0Kjf5CHaTOFuz5myooz26nlqF+fXRmVFGiOsLIPXtUOYEhVcTO9U+ZWFz9lGuDSUY3rkMh5Rlh8PT+nTyzKW1kr038qMwgZZoaqwspyz6gTq+zxDOaJcoVleLEzcBf+yD+EhXhcPflv4u3SCY+U+FkbQ7xXKFJtCflg8P0c3csVKrPrNgHkmCK3cGDbWbfGzN1KEFSJMuBRVhdUJntX/ykAGnVjcCxTKuKCfZiygKxG3KsoG+FlVIXSs4Go89OPgg7a7prxVUFqNFMouwPKz6gjWlnIo5kLmWjSlNipVsX2tj0b5exL26S7HEbhXXIcR15FIbrK/A3m10fHD6peRwlJ1aaCMjf9hdOxWF2I1RodqeI6PhQe8TvahVehEKnv2bsDez1Ik62zhtquthYzAq4rqnk/CbGCYZv3rEZ9uIvptwVcLdfYS/i4Dg+8gDVeFzzVdIGxQ9SR/00BZhWlguKKm6r2fSZjaWoJNFFjCVClv7KgoT5VlspIKxRG+c3QU1nYa0QVUKMdUSpVZBbon9TRGPLYhYHsZZjR5XbHcgfCszxOqHz1T1wjVPr2DxgbyOPpZnJsF5RrmhWcsPdU7F8sfUDdaw+Ua20LSuAuxllSZ6qjdNBpoGBZtbTWm6cdeRHgaFe4gom0s5YxiM9JWneqZpu3SWZQwjbN2oOs4Tw5okhC/PYqtLfh/CnlhYUziYU11kDdwJPIcqvId0ljljYYW8uyE8CGmjFc8rzFWgFzlpusFW6apQlmtUIaw0GOSD0AnGcVwww+wbQquLFDNKk2WK32NHAXUNMJEYVWgw5pmSREv2sWa5zykGfDPhjUaX+neFu2YJI8Ic7fGxulOyJJiGqIn4C+IQtrVwO0jYJlasf9HxSjcKhLc8UtNeSZiZVOV5y2zyWTFtxrK2iax8C3YEF0UTEMkC+6DXUk1w8qZUDomYYpvMTjHlA0aq5FDDJd3H7VInR+wBGnQVGmCDcljNEdbFRgJivauCv1eGPTPMZBbZ1Pv8JTIqt2wGHNH6HdvaK4wNoP/UdoKW2eEBLd52bNGNWR5d8MU+KMsUuc7wTbNlxhOv4cR12P4uQLLn43x9TsIG4dNN8ReCUfMQvKGRor0aRhtqhjgRZ0PaqzmpDECHwCdEcJQHE8jsOE82MOqQyF8tseorB9GkTKP5xuw1zIuyJuMabD9qX6l70eY4DFY3SLINjQ0wt0RfW0ZFNgbmv59m2G5/n0EzfsYU9fNYP8brOl+Uyw+1kioOwahgG5UKNsF96VXsS+wTGT1yDDduC0fSuwYB2vEueqIuFs6DDCIUir8UsYhffu38JeqQCD+zhiR7GlxP/ojdliUvg5C//wIO2EDgw3mUwz2W462zAsQx7GhHHjnIAxKHvgo9IFqi36islVr75CzsSq9MGXXYTE+onPg9b4SPmbN8GEYZJlP4azICNgOB3kJs+QASbofnTRfHQxTCi3M2b04IkHWK4ssWzQNW9rRJwMZHgq1uQUzr8igDRNM03ztZdhv387JdQecKZFzGv7+KjPPwr9FzslLmbmamUeGynZj5i9FPkobG1bWXGjwtXCJjn2o2Aj/uMeLfK90HClnZPBsjwtNjVcpTnVsWJfTfZ1/z4EMKlRhkWAPLAYtxuhzN8xMhodsradhdLpXXhXWdZYe5C64GVmCsmahowgMv4Ydphg0NDDAm+RJTKI84r19pYaDrQl3YvU6bzyARZ2smQfThyknIInFEti92yLJTWAvrQwtcAzAT9ZRWC9rLkmbIjraBTnpBMdn7E4hnGd/63Bz8jEwxBeacXB50EEk4viTYznPibgcHBWKPuASYVv9veOwQS4ZktG+34DJeDdc9FuOLP41hRJ7GQsrQ1BGbEdrqqOwrsdwTTXLiwmDJVEPisVXMH5mobTugZ+R66gBV2D1TNVB04YqJLo42bBf3JDB1C086qnCdpXPHNb/AcIDEV6uPLIR7jZZrK5PR8SGKkeRZTmyc6IMCuwavHsP4YP4T9L0w9oay9FN4bTokskIEliIoawuCxGzy9Vexg0YDgfewjbe8jJmYsk6K3tGFTbDt4Kbgg3nWW7EDVMD95owX2OVVif5p4wJ2OVRiI+BLauxwj7BYZ0XIe8kZbiXsAy64PmQX9ndgdnExIa1Bp21JRw6bYLlv4il/iMRAC8LXAzbV2PJ+EiLTLw1uF9NNLbVhNHdv1eDuEUtobhcvGSz4D7QyvFH629QBHMMz9+AGObNJZmuN8Cn7GgYd3WpwvRySOQ83RAz5RrvnKvwNUMQI8smoe79SBSsk6I+QKXfhu9J2OdvOn7+FIJJxw9L5k9RDz5Cx2AYuk3CQ6nGkPpZDPM+VWg3jjZobw1ezDjqoaM+Ch8jl/TGykVvPEgZ3yAt2VNQUnFytMb9+1FyLWUYej/nwB5zMAyYByH6RtKesrVo7x34vD2TkT0oyu7wrO+bcm+XwHP/cSSM1cnv2B9+YPslZC/+EdOQuxJG/r2gaFdJ/l6BWcnk0P8Hw/azTnJOHUyJHtfcF6nCfrAL9cHzlymT1Uic+ySmZCtiylRiE3QZ3rMoZfDpm54SFuoo3I9gZHwYnvtYzOo6wJ4lpoc7u1BYUVqi0zXDdGcjFNWn8IqvbZEet8MWkUa48eux3D0PR15pALm3wXOqD9l/xOLKuwkvYqHohK1fQVz8tZDpfYuRbpTtoXQao401IW95mVKpDWyF2U0T9IW1ePYL8J7KBgJFJQuF5fF4PJmQZ8dRj8fj+RleYXk8npLBKyyPx1MyeIXl8XhKBq+wPB5PyeAVlsfjKRm8wvJ4PCWDV1gej6dk8ArL4/GUDF5heTyeksErLI/HUzLYpvny2FOBDeIuwiTLqMBG3rhd9R6PDk2xKb0SERnWIbrDvyVRHZziFVbx6YCkDNWhqJ1lSE92DmKHqzIdUWGD/H01SDH1QCgB5n2IkWQa2ocQoWJ8KFWX2Dw/Fe0FYV4q0YH7KSRP7YBAgHVD8dWibTyI/IS2URrKkTBjaCi43TRELghCgDdD1ILeih+S6PktEEapDz5GeyIg3XcKESDqos0vETzy4ZTcAochvdkStGXCZojY0DchtPIgJIbYXxKWpgYRLp5DNN2lhrIk4hVW8ZmLOFO7xUgyXENhDcQLQjGhe2eH/t0OHdQ2F2W70L8bIExNlDZI2HlIfBU/UR9KK6mN9giD4yqH5pahf3fE/8O/q6MR/DHu/M6hF7sRlFgLDfmCfJxnQYmIOFpx4YoqUX9njbplxOWk7ISP0XYp55Yjf2FPhOkejWiyTqOzehtWPrhVIoXotIcqSnii5PdfYFSVJUmp4Q92FKdfJ/28i/pqLGNC1YTasI0ttQvisx8raccVUZNBV0QqTVNWcfwWscucJsz1CisfPJqQ6OIkBQk7IPxvHBMspgquuFxhlJWGbojo2shjyOFXKMY6CDHe2qWs5RoC+Q6THcK28Yik9iCGehLHJ/wtL7nzxlomLnDd/0q1P9+QYd3heOrHwfYWx3zkCRCx+KckhM6+l4j+6lJAYcM6Gy+ELJlEGebIhUgquikzHvaKKA0Rv/72hHsjmw7ORDhhFa6GraKNQtlKdFod2sCuETetUeFyjCSjcfE/h61vcEwd4qV6Gkk6A8KxxovNHCQMbobBw0YY5XsjdVocgZ3otRTZRRz+kQiFnKacA3tdOFFFX0nZOyT9tAcSIB+I/4t+d7rr+1vXQZomjxtmI456nPH9pASFdUiCIfpBDcmmQ8FlyTGwbYw2aCOpn+4nUVjipX0p42uyYR6STUS5H4phlmQG1FdBYc23fJ7bS34ve3ZzkNxkMD6+cdmLrPE2rHxxv0SanqHknVFkNq4VMTn68sC9yIDiEtkIwlVG7axIWqV/DVOuOEyM4LrI0ox1TannEczIXOSB/AVeYeWLhxPSVcVN+1olTLEe1lxSDjpog5SjYcTWYcIjKSnGPP9lpeQ+qNjfAmVYX+F5xil2WZ7QsRhl7Zsgx5qsnJS9wsoXyyRTBILjXtRPZlBCunBdY/sEOPt9kXL8gISwKqyXrFC2h3Phpk6aS8JAye+/VbhvJ+N5fqXwPN+H8gqTNEI6FSaMFfh5LVap4/y4nOIdR/PHOMk0rzkUVNiGMFQi/etIAqrDFhqreJWK5R6GB/+wmL8dDxlvzcDHqlRogg9OW9iqglGJcNa8LGGVbrbC9TWIUUIymscMXkYjNX2SW0ITjLQCV4uNsBtei90bzvEjrPwxDd7vcYRXjsRqzB6ScmMyvipVBSNewDNDW1ai3AKv/C+zEbNgmCrc/lDo82GA/wTH8wl2viWhTNKuiHOS/R6ZnXV8+OpgQWA6PpoqK85aeIWVT8ZKpDoAWbUpwZVhVUJq9UITpIGXLdETpq7tQvso8wJrKKK4qV1ZRr5eIzXT8qsgk/UNKJ2JBnXuRUSfKRjptfAKK5+MT9h0ezh+yoztjynaOGzQfRGnYpogu547i5wWP04x1VV0qi6XTL04g3Tvwu53m+M60xAb6Qdg2ipcFd7SOLeea1ult2Hlk8X4qg2Kka43hutNJJI/YHhFw2Hwb59SrqHhFO5CuGb0ivnbAQb1uSTu4yA2MneBb1wS4n5tHfP3ascK61Iiukqj/BNw8Gyf8oGphxFbWlSKxRjdjcQm7p7wu9obfnAy9sHxqobsUrzCyi83JygsWQd5yWJHwkewNcnsTS4YhrAreWMpwvDE3es0hdVH8vuvHV1jNTY/64YDWobRUZVCWV3EtT2Dg2CYvxjhkOLY0ZXC8lPC/DIb3sNR6ia4MshsX3lBRBw4I4dyyVa0LkhZqq+DlbQ4VLzMX8HHZ7+EejaXKNM0XNjPOmBr0y4p5YTCP5eIbpT83ZkDr1dY+UbHl2p5gg9XnrgnoWMXi6mSdlvjb3EvXBk2/naSnPsPhWv5FK4d4hhFRHdJyk1K2Cojw4WryO1YKXwXI6g0ZDM2ZzGx/JQw30zAbnfZiCrMIzEbg3W4GIZ8FR+rNniRrzZs6zxEruyRk7svVsOeJaIjYv7WE64EIqbYy1BU+8B5UhaQb4bi1Dz6/p0Fu1BUOdWBq4pOaJlDsR+xscJoqz5sWecjyinBuB9sgC6H7epPkONJuF+sgOtKBWygsilh2rRaHWb2R76PMaxGD8XreEGxvjReCNXZTVJ2coIcnZl5nUYbScdFkvMHajzbnR3dF0H3SN29JOUeipFDVlZwWUz5gQ7l3hd1jlIoW8PMy5h5MTNvTCj3ksv3y08J84/Kqt8sib0rz3yCyA15Ya6j6JhilPSmxfliZDZC8rcRofAtWRCsFKokkyiDn91WKaYlp1EbvMLKPy8S0TspUuqEkckT4xC9IS+MUYzwKmMIpmG2XJGw/Wa0g83nMgK/s1GIEf+eZX1DXMfR8wqrNBifIGUePNtlNhIVG+npCVuRVJG1YxLe90EY2ydpnDMFjpUTJH+XyZH0/p0qiXjQMRIbzDaEcZjw4sICxGY7ymDEKBTdTgn3wxhvdC8NxmHPHSMCQkALGIJ1PNsfgM+VLHyICs1hqA5YCgN8WL7mGhuwxZf4NCjfwNky2kYSM+EtH/iQlWPxwFQRLsPqWEds0u4TytrD2Eb0BUa/ExSiry4ioutxXrA3r0XKBuH5kKF/yJdKtC1kEE6tQqmK+y6u8SasxJk6qgo9IEZtQs4ogb+V2D4lUrYJw/+uuL/Cwz+4H8I3S4wKxcdT7CN0DxH9B/0WeASsxzqAAAAAAElFTkSuQmCC");

/***/ }),

/***/ "./src/assets/style.css":
/*!******************************!*\
  !*** ./src/assets/style.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/js/summary.js":
/*!***************************!*\
  !*** ./src/js/summary.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/style.css */ "./src/assets/style.css");
/* harmony import */ var _assets_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_img_Praetura_Ventures_logo_white_rgb_small1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/img/Praetura-Ventures-logo_white_rgb_small1.png */ "./src/assets/img/Praetura-Ventures-logo_white_rgb_small1.png");


var TableController = __webpack_require__(/*! ./tablecontroller.js */ "./src/js/tablecontroller.js");

var UIController = __webpack_require__(/*! ./uicontroller */ "./src/js/uicontroller.js");



function setInitState() {
  document.getElementById('status-filter').value = 'Active';
  UIController.displayRows(0);
  console.log('init');
}

function getState() {
  var stage = document.getElementById('stage-filter').value;
  var status = document.getElementById('status-filter').value;
  var location = document.getElementById('location-filter').value;
  var person = document.getElementById('person-filter').value;
  var state = {};
  state.stage = stage;
  state.status = status;
  state.location = location;
  state.person = person;
  return state;
}

function paginationHandler() {
  var paginationLinks = document.querySelectorAll('.added-pagination');
  paginationLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      e.target.parentNode.parentNode.childNodes.forEach(function (node) {
        if (node.classList !== undefined) {
          node.classList.remove('active');
        }
      });
      e.target.parentNode.classList.toggle('active');
      var startIndex = Number.parseInt(e.target.textContent);
      UIController.displayRows(startIndex);
    });
  });
  var back = document.querySelector('.pagination-back');
  var next = document.querySelector('.pagination-next');
  back.addEventListener('click', function (e) {
    e.preventDefault();
    var target = document.querySelector('.pagination li.active');
    var paginationLength = document.querySelectorAll('.pagination-link').length;
    var nextTarget = target.previousSibling;
    console.log(nextTarget.textContent);

    if (Number.parseInt(target.textContent) > 1) {
      target.classList.remove('active');
      nextTarget.firstChild.click();
      nextTarget.classList.add('active');
    }

    e.stopImmediatePropagation();
    e.preventDefault();
  });
  next.addEventListener('click', function (e) {
    var target = document.querySelector('.pagination li.active');
    var paginationLength = document.querySelectorAll('.pagination-link').length;
    var nextTarget = target.nextSibling;

    if (Number.parseInt(target.textContent) < paginationLength) {
      target.classList.remove('active');
      console.log(nextTarget);
      nextTarget.firstChild.click();
      console.log('clicked');
      nextTarget.classList.add('active');
    }

    e.stopImmediatePropagation();
    e.preventDefault();
  });
}

function addFilterEventListeners() {
  var filters = document.querySelectorAll('select');
  filters.forEach(function (filter) {
    filter.addEventListener('change', function (e) {
      var state = getState();
      fetch("/getFilteredData/".concat(e.target.value, "/").concat(e.target.id), {
        method: 'POST',
        body: JSON.stringify(state),
        headers: {
          "Content-Type": 'application/json'
        }
      }).then(function (res) {
        return res.json();
      }).then(function (res) {
        UIController.buildSummaryTable(res);
        UIController.createPagination(res.length);
        UIController.displayRows(0);
        paginationHandler();
      });
    });
  });
  document.querySelector('#search-input').addEventListener('keyup', function () {
    var tableEntries = document.querySelectorAll('.summary-row');
    var page = document.querySelector('.pagination li.active').textContent;
    UIController.displayRows(page); //makes pagination strict
    // let testEntries =[];
    // tableEntries.forEach((entry) => {
    //     if (entry.style.display === 'table-row') {
    //         testEntries.push(entry)
    //     }
    // })

    var searchVal = document.querySelector('#search-input').value.toLowerCase();
    tableEntries.forEach(function (row) {
      if (row.textContent.toLowerCase().includes(searchVal)) {
        row.style.display = 'table-row';
      } else {
        row.style.display = 'none';
      }
    });
  });
} // Init page


document.querySelector('#navbar-logo').src = _assets_img_Praetura_Ventures_logo_white_rgb_small1_png__WEBPACK_IMPORTED_MODULE_1__["default"];
TableController.filterToggle();
UIController.loadEventListeners();
UIController.buildTable().then(function () {
  addFilterEventListeners();
  setInitState();
  paginationHandler();
});

/***/ }),

/***/ "./src/js/tablecontroller.js":
/*!***********************************!*\
  !*** ./src/js/tablecontroller.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TableController =
/*#__PURE__*/
function () {
  function TableController() {
    _classCallCheck(this, TableController);
  }

  _createClass(TableController, null, [{
    key: "filterToggle",
    // adds event listeners and font awesome toggle
    //TODO need to add logic to filter data
    value: function filterToggle() {
      var _this = this;

      var headers = document.querySelectorAll('.table-header');
      headers.forEach(function (header) {
        header.addEventListener('click', function (e) {
          var headers = document.querySelectorAll('.table-header');
          var targetState = '';
          var targetNode;
          var columnText = '';

          if (e.target.tagName === 'TH') {
            targetState = e.target.children[0].className;
            targetNode = e.target.children[0];
            columnText = e.target.textContent;
          } else {
            targetState = e.target.className;
            targetNode = e.target;
            columnText = e.target.parentNode.textContent;
          } //remove state from all first


          headers.forEach(function (header) {
            header.children[0].className = "fas fa-sort";
          });

          if (targetState === "fas fa-sort") {
            targetNode.className = "fas fa-sort-up";
          } else if (targetState === "fas fa-sort-up") {
            targetNode.className = "fas fa-sort-down";
          } else {
            targetNode.className = "fas fa-sort-up";
          }

          var data = document.querySelectorAll('.summary-row');
          var arrData = Array.from(data);
          var filterMethod = targetNode.className;
          var filter = '';

          if (filterMethod === "fas fa-sort-up") {
            filter = 'ASC';
          } else {
            filter = 'DESC';
          }

          var cleansedData = arrData.filter(function (item) {
            if (item.style.display === 'table-row') {
              return true;
            } else {
              return false;
            }
          });
          var column = 0;

          switch (columnText) {
            case 'Name':
              column = 1;
              break;

            case 'Stage':
              column = 2;
              break;

            case 'Person/Owner':
              column = 3;
              break;

            case 'Person/Owner':
              column = 3;
              break;

            case 'Investment Amount':
              column = 4;
              break;

            case 'Location':
              column = 5;
              break;

            case 'Status':
              column = 6;
              break;
          }

          _this.sortLoadedData(cleansedData, filter, column);
        });
      });
    }
  }, {
    key: "sortLoadedData",
    value: function sortLoadedData(data, order, column) {
      console.log(order);
      var cleansedData = [];
      data.forEach(function (item) {
        cleansedData.push(item.children[column - 1]);
      });

      if (column === 2 || column === 4) {
        //  Number sort
        if (order === 'ASC') {
          cleansedData.sort(function compare(a, b) {
            console.log(a.textContent, b.textContent);
            a = Number.parseInt(a);
            b = Number.parseInt(b);
            if (a > b) return 1;
            if (b > a) return -1;
            return 0;
          });
        } else {
          cleansedData.sort(function compare(a, b) {
            console.log(a.textContent, b.textContent);
            a = Number.parseInt(a);
            b = Number.parseInt(b);
            if (a < b) return 1;
            if (b < a) return -1;
            return 0;
          });
        }
      } else {
        //String sort
        if (order === 'ASC') {
          console.log(cleansedData);
          cleansedData.sort(function compare(a, b) {
            console.log(a.textContent, b.textContent);
            if (a.textContent > b.textContent) return 1;
            if (b.textContent > a.textContent) return -1;
            return 0;
          });
        } else {
          cleansedData.sort(function compare(a, b) {
            if (a.textContent < b.textContent) return 1;
            if (b.textContent < a.textContent) return -1;
            return 0;
          });
        }

        var renderData = [];
        cleansedData.forEach(function (row) {
          renderData.push(row.parentNode);
        });
        document.querySelectorAll('.summary-row').forEach(function (row) {
          if (row.style.display === 'table-row') {
            row.remove();
          }
        });
        var table = document.querySelector('#summary-table');
        renderData.forEach(function (row) {
          table.appendChild(row);
        });
      }
    }
  }]);

  return TableController;
}();

module.exports = TableController;

/***/ }),

/***/ "./src/js/uicontroller.js":
/*!********************************!*\
  !*** ./src/js/uicontroller.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UIController =
/*#__PURE__*/
function () {
  function UIController() {
    _classCallCheck(this, UIController);
  }

  _createClass(UIController, [{
    key: "getStage",
    value: function getStage(opportunity) {
      return opportunity.stage;
    }
  }, {
    key: "getState",
    value: function getState() {}
  }, {
    key: "addNumberNode",
    // static mobileMenuAnimation() {
    //   let mobileMenu = document.querySelector('#mobile-menu');
    //   console.log(mobileMenu.childNodes);
    //
    // }
    value: function addNumberNode(stage) {}
  }, {
    key: "setStageUiState",
    value: function setStageUiState(stage) {}
  }], [{
    key: "proceedStage",
    value: function proceedStage(nextStage) {
      if (nextStage >= 8) {
        return;
      }

      var container = document.getElementsByClassName('grid-container')[0];
      var html = "<div class=\"pv-circle\"> \n      <span class=\"node-number\" id=\"circle-".concat(nextStage, "\">").concat(nextStage, "</span>    \n      </div>");
      var wrapper = document.createElement('div');
      wrapper.innerHTML = html;
      container.appendChild(wrapper.firstChild);
      container.children[container.children.length - 2].style.background = '#03ceab';
      container.children[container.children.length - 1].style.background = '#008cf0';
      UIController.loadEventListeners();
    } // sets PV circles on load

  }, {
    key: "setLoadState",
    value: function setLoadState(stage) {
      // //
      // if(stage === 0) {
      //   stage = 1;
      // }
      var container = document.getElementsByClassName('grid-container')[0]; // Set Grid

      if (stage <= 4) {
        container.style.gridTemplateColumns = "repeat(auto-fill, minmax(200px,1fr)";
      } else {
        container.style.gridTemplateColumns = "repeat(auto-fit, minmax(70px,1fr)";
      } // Add circles


      var html = '';
      var i;

      for (i = 0; i <= stage; i++) {
        html += "<div class=\"pv-circle\"> \n      <span class=\"node-number\" id=\"circle-".concat(i, "\">").concat(i, "</span>    \n      </div>");
      }

      container.innerHTML = html;
      var selector = "#circle-".concat(stage);
      document.querySelector(selector).parentNode.style.background = '#008cf0'; // Color Circles

      var circles = document.querySelectorAll('pv-circle'); // convert html collecton to aray

      circles.forEach(function (elem, index) {
        if (elem.children.item(0).id === "circle-".concat(stage)) {
          elem.style.background = '#008cf0';
        }
      });
      var fields = document.querySelectorAll('.field-set');
      fields.forEach(function (field) {
        // set stage zero to 1
        if (stage === 0) {
          stage = 1;
        }

        if (field.id === "stage-".concat(stage, "-fields")) {
          field.style.display = "grid";
        } else {
          field.style.display = 'none';
        }
      });
    }
  }, {
    key: "setFields",
    value: function setFields(stage) {
      var fieldSets = document.querySelectorAll('.field-set');
      fieldSets.forEach(function (field, index) {
        // console.log(field.id,index);
        //set stage to 1 if stage 0
        var setStage = stage == 0 ? 1 : stage;
        console.log(setStage);

        if (field.id === "stage-".concat(setStage, "-fields")) {
          field.style.display = "grid";
        } else {
          field.style.display = 'none';
        }
      });
    }
  }, {
    key: "radioButtonState",
    value: function radioButtonState(e) {
      var targetId = e.target.id;
      var siblingId = "";

      if (targetId.includes("yes")) {
        siblingId = targetId.replace("yes", "no");
      } else {
        siblingId = targetId.replace("no", "yes");
      }

      document.getElementById(siblingId).removeAttribute("checked");
      document.getElementById(siblingId).checked = false;
      document.getElementById(targetId).setAttribute("checked", "checked");
    }
  }, {
    key: "loadEventListeners",
    value: function loadEventListeners() {
      var _this = this;

      var circles = document.querySelectorAll('.pv-circle');
      circles.forEach(function (circle) {
        circle.addEventListener('click', function (e) {
          var circles = document.querySelectorAll('.pv-circle');
          var stage;
          circles.forEach(function (circle) {
            return circle.style.background = '#03ceab';
          });

          if (e.target.tagName === 'SPAN') {
            e.target.parentNode.style.background = '#008cf0';
            console.log(e.target.innerHTML);
            stage = e.target.innerHTML;
          } else {
            e.target.style.background = '#008cf0';
            console.log(e.target.children[0].innerHTML);
            stage = e.target.children[0].innerHTML;
          }

          _this.setFields(stage);
        });
      });
      var mobileMenu = document.querySelector('#mobile-menu');
      mobileMenu.addEventListener('click', this.toggleMobileMenu);
      var radioBtns = document.querySelectorAll('.form-check-input');
      radioBtns.forEach(function (btn) {
        btn.addEventListener('click', _this.radioButtonState);
      }); // mobileMenu.addEventListener("mouseover", this.mobileMenuAnimation)
    }
  }, {
    key: "toggleMobileMenu",
    value: function toggleMobileMenu() {
      var mobileMenu = document.querySelector('.mobile-menu-dropdown');
      console.log('running');

      if (mobileMenu.style.display === "none") {
        mobileMenu.style.display = "block";
      } else {
        mobileMenu.style.display = "none";
      }
    }
  }, {
    key: "buildSummaryTable",
    value: function buildSummaryTable(data) {
      document.querySelectorAll('.summary-row').forEach(function (row) {
        return row.remove();
      });
      console.log('start build summary table');
      var table = document.getElementById("summary-table");
      var html = '';
      var lengthOf = data.length;
      data.forEach(function (row, index) {
        if (row.one_OppName === undefined) {} else {
          var url = row.one_OppName.trim().split(' ').join('_');
          html += "\n\n        <tr id=\"row-".concat(row.one_OppName, "\" class=\"summary-row \">\n        \n        <td class=\"table-entry\"><a href=\"/opportunity/").concat(url, "}\">").concat(row.one_OppName, "</a></td>\n        <td class=\"table-entry\"><a href=\"/opportunity/").concat(url, "}\">").concat(row.opp_CurrentStage, "</a></td>\n        <td class=\"table-entry\"><a href=\"/opportunity/").concat(url, "}\">").concat(row.one_PvLead, "</a></td>\n        <td class=\"table-entry\"><a href=\"/opportunity/").concat(url, "}\">").concat(row.one_InvestmentAmount, "</a></td>\n        <td class=\"table-entry\"><a href=\"/opportunity/").concat(url, "}\">").concat(row.one_Location, "</a></td>\n        <td class=\"table-entry\"><a href=\"/opportunity/").concat(url, "}\">").concat(row.opp_Status, "</a></td>\n       \n      </tr>\n        ");
        }
      });
      table.innerHTML = html;
      this.createPagination(lengthOf);
      console.log('end build summary table');
    }
  }, {
    key: "displayRows",
    value: function displayRows(endIndex) {
      var rows = document.querySelectorAll('.summary-row');
      var begIndex = endIndex === 0 ? 0 : endIndex * 25 - 25;
      var finishIndex = begIndex === 0 ? 25 : endIndex * 25;
      console.log(begIndex, finishIndex);
      rows.forEach(function (row, index) {
        if (begIndex <= index && index < finishIndex) {
          row.style.display = 'table-row';
        } else {
          row.style.display = 'none';
        }
      });
    }
  }, {
    key: "buildTable",
    value: function () {
      var _buildTable = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var _this2 = this;

        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch('/getData').then(function (res) {
                  return res.json();
                }).then(function (res) {
                  _this2.buildSummaryTable(res);
                }).then(function () {
                  return console.log('build table done');
                })["catch"](function (err) {
                  return console.log(err);
                });

              case 2:
                data = _context.sent;

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function buildTable() {
        return _buildTable.apply(this, arguments);
      }

      return buildTable;
    }()
  }, {
    key: "createPagination",
    value: function createPagination(length) {
      var pagination = document.querySelector('.pagination');
      var backBtn = document.querySelector('.pagination-back');
      var numberOfButtons = Math.ceil(length / 50);
      var html = '';
      document.querySelectorAll('.pagination-link').forEach(function (node) {
        return node.remove();
      });

      for (var i = 1; i <= numberOfButtons; i++) {
        if (i === 1) {
          html += "<li class=\"page-item pagination-link added-pagination active\" ><a class=\"page-link\" href=\"\">".concat(i, "</a></li>");
        } else {
          html += "<li class=\"page-item pagination-link\" ><a class=\"page-link added-pagination\" href=\"\">".concat(i, "</a></li>");
        }
      }

      backBtn.parentNode.insertBefore(document.createRange().createContextualFragment(html), backBtn.nextSibling);
    }
  }]);

  return UIController;
}();

module.exports = UIController;

/***/ })

/******/ });
//# sourceMappingURL=summary.bundle.js.map