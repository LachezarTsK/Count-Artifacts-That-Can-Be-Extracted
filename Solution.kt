
class Solution {

    fun digArtifacts(sideMatrix: Int, artifacts: Array<IntArray>, dig: Array<IntArray>): Int {
        val excavated = Array(sideMatrix) { BooleanArray(sideMatrix) }
        for ((row, column) in dig) {
            excavated[row][column] = true
        }

        var countExtractedArtifacts = 0
        for (artifact in artifacts) {
            if (canBeExtracted(artifact, excavated)) {
                ++countExtractedArtifacts
            }
        }
        return countExtractedArtifacts
    }

    private fun canBeExtracted(artifact: IntArray, excavated: Array<BooleanArray>): Boolean {
        val startRow = artifact[0]
        val endRow = artifact[2]

        val startColumn = artifact[1]
        val endColumn = artifact[3]

        for (row in startRow..endRow) {
            for (column in startColumn..endColumn) {
                if (!excavated[row][column]) {
                    return false
                }
            }
        }
        return true
    }
}
