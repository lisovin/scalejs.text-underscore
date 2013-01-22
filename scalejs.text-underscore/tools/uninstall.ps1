param($installPath, $toolsPath, $package, $project)

$project |
	Remove-Paths 'scalejs.text-underscore' |
	Remove-ScalejsExtension 'scalejs.text-underscore' |
	Out-Null
