var Comic;

(function () {
  'use strict';

  Comic = function () {
    this.comments = [];
    this.rate = {
      totalUsers: 0,
      percentages: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
      }
    }

    this.updateAvg = updateAvg;
  }

  Comic.prototype = {
    addComment: addComment,
    getAvgRate: getAvgRate,
  }

  function addComment(comment) {

    comment.timestamp = new Date();
    updateRates(comment);

    this.comments.push(comment);
  }

  function getAvgRate() {
    this.updateAvg();
    return this.rate.avg;
  }

  // Private ----------------------------------------------
  function updateRates(comment) {
    this.rate.totalUsers += 1;
    this.rate.percentages[comment.rate] += 1;
    this.updateAvg();
  }

  function updateAvg() {
    var total = 0,
      sum = .0;
    for (var stars in this.rate.percentages) {
      total += this.rate.percentages[stars];
      sum += stars * this.rate.percentages[stars];
    }
    this.rate.avg = sum / total;
  }

}());
