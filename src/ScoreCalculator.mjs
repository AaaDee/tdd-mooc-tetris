const lineMultipliers = [40, 100, 300, 1200];

export class ScoreCalculator {
  score;

  constructor(score = 0) {
    this.score = score;
  }

  getScore() {
    return this.score;
  }

  update(lines, level) {
    const addedScore = lineMultipliers[lines - 1] * (level + 1)
    this.score += addedScore;
  }
}
