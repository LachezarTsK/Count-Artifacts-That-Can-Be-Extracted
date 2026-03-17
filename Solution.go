
package main

func digArtifacts(sideMatrix int, artifacts [][]int, dig [][]int) int {
    excavated := make([][]bool, sideMatrix)
    for row := range sideMatrix {
        excavated[row] = make([]bool, sideMatrix)
    }

    for _, coordinates := range dig {
        row := coordinates[0]
        column := coordinates[1]
        excavated[row][column] = true
    }

    countExtractedArtifacts := 0
    for _, artifact := range artifacts {
        if canBeExtracted(artifact, excavated) {
            countExtractedArtifacts++
        }
    }
    return countExtractedArtifacts
}

func canBeExtracted(artifact []int, excavated [][]bool) bool {
    startRow := artifact[0]
    endRow := artifact[2]

    startColumn := artifact[1]
    endColumn := artifact[3]

    for row := startRow; row <= endRow; row++ {
        for column := startColumn; column <= endColumn; column++ {
            if !excavated[row][column] {
                return false
            }
        }
    }
    return true
}
