# Shortcuts
Directions: Use the Find Function to locate areas of code desired. 


# Things to Build
[[false], "3 Testing cubes that can be manipulated by GUI, then when we run the tests we can just put those values in the Δ function in which it applies."]


[[false], "Create the object to map"]




# Geometries for Application

Circle = geo_objT_CircleA1
Plane = geo_objT_PlaneA1
Ring = geo_objT_RingA0
Sphere = geo_objT_SphereA0
Cube = geo_objT_BoxA0
Cone = geo_objT_ConeA0
Pyramid = geo_objT_PyramidA0
Diamond = geo_objT_DiamondA0
Donut = geo_objT_TorusA0 
Cylinder (Closed) = geo_objT_CylinderClosedA0
Cylinder (Open) = geo_objT_CylinderOpenedA0



# ImgAssets

RoomThemeImg = SceneWallpaper_01
GridInterior = gridF1_PureGreenOoze
GridExterior = gridF2_PureGreenOoze

WhitePanel = RegPanelWhite01
GridPaper = GridPaper01

*################################################*
# ComponentFunctions
*################################################*


*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
## Geometries
*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
ToMakeAnyGeometry = 
``` js

// ----------------------------------
// CreateGeometry with Object
// ----------------------------------

let chicagoSphere, mesh_chicagoSphere

const chicagoSpace = {
    groupName: chicagoSphere,
    mesh_name: mesh_chicagoSphere
}

CreateGeometry(
	chicagoSpace.GroupName, chicagoSpace.space02,
	geo_objT_SphereA0,
	SkylineNewYork01, SkylineNewYork01,
	false, false,
	0, 550, 0,
	0, 0, 0,
	50, 50, 50,
)

// ----------------------------------
// CreateGeometry with Just Variables
// ----------------------------------
let roomContainer2, mesh_roomContainer2

CreateGeometry(
    roomContainer2, mesh_roomContainer2,
    geo_objT_BoxA0,
    wpNeonAqua01, wpNeonAqua01,
    true, false,
    0, 0, 0,
    0, 0, 0,
    100, 100, 100,
)


```

*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
## Objects
*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*
TechTile(Original)
TechTile(Modern)
TechTile aka TechIcon(Current) = 
``` js 
CurrentLocationPanel_Default.add(
    new TechIcon(
        0, 0, 0,
        0, 0, 0,
        0.55, 0.55, 0.55,
        'DefaultTechIconId', 'DefaultTechIconClassName',
        'DefaultHeaderInfoId', 'DefaultHeaderInfoClassName',
        'DefaultImgId', 'DefaultImgClassName',
        'DefaultTechIconInfoPanelId', 'DefaultTechIconInfoPanelClassName',
        "./assets/icons/00-Official/UI/Isometric/tools/fullerene-analysis.svg", "",
        uxFx_GoToPortfolioProper, 
        "Waiting Room",
        "Decide what you want to do by pressing the ESC Key to use your mouse"
    )
)


```

4.HoverObject = 
``` js


// Hover Object
// --------------------------------------------
CurrentLocation_CenterPanel.add(
					
    // Center
    new hoverObject(
        'img',
        -1.2, 2.5, -5,
        0, 0, 0,
        0.045, 0.045, 0.045,
        "Testing234", "TestingClass234",
        "./assets/img/02-UserUI/05-CurrentLocationPanel/mainPanel.svg", "",
        "TheHeaderTest", "TheHeaderClassNameTest", "HeaderNameTest", "Um... Love each other...correctly.",
        uxFx_GoToPortfolioProper
    )

)


```

PDF_OnlyComponent =
``` js

// PDF Component Only
// --------------------------------------------
HomeScreenSaver.add(

    new makePDF_Viewer(
        0, 0, 0,
        0, 0, 0,
        1, 1, 1,
        "hoverClockA1",
        "https://matrix.logic-wire.de/",
        "1920px", "1200"
    )

)


```

# ImgReferences



|- Testing Components
    |- TechTileV01  = { Copy: TechContainer_Tester01 }

|- CSS


|- HTML


|- Base Scene Data


|- Events
    |- KeyDownEvents = { Copy: `Shortcuts_Keydown_Events`}


|- GeometricDimensions
    |- Beginning = { Copy: `objectTestingGroupParams`}

|- Main Objects
    |- MainBrainWallpaperChange = { Copy: `workSphere`}


|- GeometricGeometries
    |- Box = { Copy: `**geo_objT_BoxA0**` }

|- UI


|- Applications
    |- FinanceApplications / embedFiles =>  { Copy: `CmStrm03_FinancialApps_root` } 


|- VideoDomains
    |- { Copy: `videoDomainMatrix` } 



``` js


fx_animate_P2_MoveGeometry = (
					// 	pDuration, pDelay,
					// 	repeatAnimation,
					// 	yoyoStatus,
					// 	pz, py, px,
					// 	myFunction,
					// 	) => {

					// 		let tl = gsap.timeline({
					// 			repeat: 0
					// 		})

					// 		tl.to(this.MyGroupName.position, {
					// 			duration: pDuration,
					// 			delay: pDelay,
					// 			yoyo: yoyoStatus,
					// 			z: pz,
					// 			y: py,
					// 			x: px,
					// 			onComplete: myFunction,
					// 		})

					// 		tl.to(this.MyGroupName.position, {
					// 			duration: pDuration,
					// 			delay: pDelay,
					// 			yoyo: yoyoStatus,
					// 			z: pz,
					// 			y: py,
					// 			x: px,
					// 			onComplete: myFunction,
					// 		})
						
					// 	}
					// }


					// fx_animate_P1_MoveGeometry = (
					// 	pDuration, pDelay,
					// 	repeatAnimation,
					// 	yoyoStatus,
					// 	pz, py, px,
					// 	myFunction,
					// 	) => {
					// 		let 

					// 		gsap.to(this.MyGroupName.position, {
					// 		duration: pDuration,
					// 		delay: pDelay,
					// 		yoyo: yoyoStatus,
					// 		z: pz,
					// 		y: py,
					// 		x: px,
					// 		onComplete: myFunction,
					// 	})
					// }


```



