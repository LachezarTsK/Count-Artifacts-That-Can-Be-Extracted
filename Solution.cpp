
#include <span>
#include <vector>
using namespace std;

class Solution {

public:
    int digArtifacts(int sideMatrix, vector<vector<int>>& artifacts, vector<vector<int>>& dig) {
        vector<vector<bool>> excavated(sideMatrix, vector<bool>(sideMatrix));
        for (const auto& coordinates : dig) {
            int row = coordinates[0];
            int column = coordinates[1];
            excavated[row][column] = true;
        }

        int countExtractedArtifacts = 0;
        for (const auto& artifact : artifacts) {
            if (canBeExtracted(artifact, excavated)) {
                ++countExtractedArtifacts;
            }
        }
        return countExtractedArtifacts;
    }

private:
    static bool canBeExtracted(span<const int> artifact, span<const vector<bool>> excavated) {
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
};
