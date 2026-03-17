
public class Solution {

    public int digArtifacts(int sideMatrix, int[][] artifacts, int[][] dig) {
        boolean[][] excavated = new boolean[sideMatrix][sideMatrix];
        for (int[] coordinates : dig) {
            int row = coordinates[0];
            int column = coordinates[1];
            excavated[row][column] = true;
        }

        int countExtractedArtifacts = 0;
        for (int[] artifact : artifacts) {
            if (canBeExtracted(artifact, excavated)) {
                ++countExtractedArtifacts;
            }
        }
        return countExtractedArtifacts;
    }

    private static boolean canBeExtracted(int[] artifact, boolean[][] excavated) {
        int startRow = artifact[0];
        int endRow = artifact[2];

        int startColumn = artifact[1];
        int endColumn = artifact[3];

        for (int row = startRow; row <= endRow; ++row) {
            for (int column = startColumn; column <= endColumn; ++column) {
                if (!excavated[row][column]) {
                    return false;
                }
            }
        }
        return true;
    }
}
