
/**
 * @param {number} sideMatrix
 * @param {number[][]} artifacts
 * @param {number[][]} dig
 * @return {number}
 */
var digArtifacts = function (sideMatrix, artifacts, dig) {
    const excavated = Array.from(new Array(sideMatrix), () => new Array(sideMatrix).fill(false));
    for (let [row, column] of dig) {
        excavated[row][column] = true;
    }

    let countExtractedArtifacts = 0;
    for (let artifact of artifacts) {
        if (canBeExtracted(artifact, excavated)) {
            ++countExtractedArtifacts;
        }
    }
    return countExtractedArtifacts;
};

/**
 * @param {number[]} artifact
 * @param {boolean[][]} excavated
 * @return {boolean}
 */
function canBeExtracted(artifact, excavated) {
    const startRow = artifact[0];
    const endRow = artifact[2];

    const startColumn = artifact[1];
    const endColumn = artifact[3];

    for (let row = startRow; row <= endRow; ++row) {
        for (let column = startColumn; column <= endColumn; ++column) {
            if (!excavated[row][column]) {
                return false;
            }
        }
    }
    return true;
}
