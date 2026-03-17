
using System;

public class Solution
{
    public int DigArtifacts(int sideMatrix, int[][] artifacts, int[][] dig)
    {
        bool[,] excavated = new bool[sideMatrix, sideMatrix];
        foreach (int[] coordinates in dig)
        {
            int row = coordinates[0];
            int column = coordinates[1];
            excavated[row, column] = true;
        }

        int countExtractedArtifacts = 0;
        foreach (int[] artifact in artifacts)
        {
            if (CanBeExtracted(artifact, excavated))
            {
                ++countExtractedArtifacts;
            }
        }
        return countExtractedArtifacts;
    }

    private static bool CanBeExtracted(int[] artifact, bool[,] excavated)
    {
        int startRow = artifact[0];
        int endRow = artifact[2];

        int startColumn = artifact[1];
        int endColumn = artifact[3];

        for (int row = startRow; row <= endRow; ++row)
        {
            for (int column = startColumn; column <= endColumn; ++column)
            {
                if (!excavated[row, column])
                {
                    return false;
                }
            }
        }
        return true;
    }
}
