param($installPath, $toolsPath, $package, $project)

$project |
	Add-Paths "{
		'underscore.string': 'Scripts/underscore.string',
		'scalejs.text-underscore' : 'Scripts/scalejs.text-underscore-$($package.Version)'
	}" |
	Add-ScalejsExtension 'scalejs.text-underscore' |
	Out-Null