
function digArtifacts(sideMatrix: number, artifacts: number[][], dig: number[][]): number {
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

function canBeExtracted(artifacts: number[], excavated: boolean[][]): boolean {
    const startRow = artifacts[0];
    const endRow = artifacts[2];

    const startColumn = artifacts[1];
    const endColumn = artifacts[3];

    for (let row = startRow; row <= endRow; ++row) {
        for (let column = startColumn; column <= endColumn; ++column) {
            if (!excavated[row][column]) {
                return false;
            }
        }
    }
    return true;
}
