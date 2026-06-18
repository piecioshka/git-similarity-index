Output demo/git-similarity-index.gif

Require git-similarity-index

Set Shell "bash"
Set Framerate 60
Set FontSize 12
Set Width 800
Set Height 400
Set Padding 20
Set Margin 5
Set MarginFill "#212830"
Set BorderRadius 10

Hide
Type 'cd /tmp/git-similarity-index-demo && clear' Enter
Show

Type "head file1.txt file2.txt" Sleep 200ms Enter
Wait Sleep 1500ms

Enter Enter Type "# compute the similarity index (%) of two files" Sleep 200ms Enter Enter
Wait Sleep 800ms

Type "git-similarity-index file1.txt file2.txt" Sleep 500ms Enter
Wait Sleep 1500ms

Enter Enter Type "# the same comparison, using git under the hood" Sleep 200ms Enter Enter
Wait Sleep 800ms

Type "git-similarity-index file1.txt file2.txt --use-git" Sleep 500ms Enter
Wait Sleep 1500ms

Sleep 3s
