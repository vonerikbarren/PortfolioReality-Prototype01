const MasterDataLogBook = {
   Toc: [],
   LogBook: [
      // Template
      {
         EntryTitle: "",
         EntryStartTime: "",
         EntryStopTime: "",
         EntryEndTime: "",
         EntryReference: '',
         EntryData: [
            '',
         ],
      },
   ]
}

const TimeWheel01 = {
   root: true,

   generalNotes: [
      "#Building",
      "ΔTS = 15:30"
      'When building we ran into a couple of issues that need to written here. The reason it needs to be here is because we are planning on not only using more than one, but also we are planning on using more than 4 realities TimeGear *New name for TimeGear*',

      '# Construction',
      'We used Four Spheres for timeWheel01....So please follow this:'

      'Every reality must be facing towards the timeGear. Even if we plan on making a timeGear = 4Δ+, we need to have all realities facing the gear. Unfortunately we have not mastered Rotation so use dat.gui tool. Unfortunately also you will need all axis as when you turn it you need to use a different axis for the spin.',

      'This is somewhat complicated so take plenty of notes.'
      "ΔTF = 16:30"
   ],
}

				//#########################################
				// # Time Wheel
				//#########################################
				TimeWheel01 = new THREE.Group()
				TimeWheel01.position.set(0, 100000, -1000000)

				// Test Wheel Root
				const geo_TimeWheel01_Root_L0 = new THREE.SphereGeometry(10000, 32, 32)
				const mat_TimeWheel01_Root_L0 = new THREE.MeshBasicMaterial({ map: testImg05, side: THREE.DoubleSide });
				mesh_TimeWheel01_Root_L0 = new THREE.Mesh(geo_TimeWheel01_Root_L0, mat_TimeWheel01_Root_L0)
				mat_TimeWheel01_Root_L0.transparent = false;
				// mat_TimeWheel01_Root_L0.alphaMap = TimeWheel01_RootIm0_01
				mat_TimeWheel01_Root_L0.wireframe = false;
				mesh_TimeWheel01_Root_L0.position.set(0, 0, 200)
				mesh_TimeWheel01_Root_L0.scale.set(3, 3, 3)
				TimeWheel01.add(mesh_TimeWheel01_Root_L0)

				// Spring
				const geo_TimeWheel01_Reality01_L0 = new THREE.SphereGeometry(20000, 32, 32)
				const mat_TimeWheel01_Reality01_L0 = new THREE.MeshBasicMaterial({ map: TimeReality01, side: THREE.DoubleSide });
				mesh_TimeWheel01_Reality01_L0 = new THREE.Mesh(geo_TimeWheel01_Reality01_L0, mat_TimeWheel01_Reality01_L0)
				mat_TimeWheel01_Reality01_L0.transparent = false;
				// mat_TimeWheel01_Reality01_L0.alphaMap = TimeWheel01_Reality01Im0_01
				mat_TimeWheel01_Reality01_L0.wireframe = false;
				mesh_TimeWheel01_Reality01_L0.position.set(0, 100000, 200)
				mesh_TimeWheel01_Reality01_L0.scale.set(3, 3, 3)
				mesh_TimeWheel01_Reality01_L0.rotation.set(0, 0, 3.14)
				TimeWheel01.add(mesh_TimeWheel01_Reality01_L0)

				// Summer
				const geo_TimeWheel01_Reality02_L0 = new THREE.SphereGeometry(20000, 32, 32)
				const mat_TimeWheel01_Reality02_L0 = new THREE.MeshBasicMaterial({ map: TimeReality02, side: THREE.DoubleSide });
				mesh_TimeWheel01_Reality02_L0 = new THREE.Mesh(geo_TimeWheel01_Reality02_L0, mat_TimeWheel01_Reality02_L0)
				mat_TimeWheel01_Reality02_L0.transparent = false;
				// mat_TimeWheel01_Reality02_L0.alphaMap = TimeWheel01_Reality02Im0_01
				mat_TimeWheel01_Reality02_L0.wireframe = false;
				mesh_TimeWheel01_Reality02_L0.rotateZ( - Math.PI / 3 );
				mesh_TimeWheel01_Reality02_L0.position.set(100000, 0, 200)
				mesh_TimeWheel01_Reality02_L0.scale.set(3, 3, 3)
				mesh_TimeWheel01_Reality02_L0.rotation.set(0, 0, 1.7)
				TimeWheel01.add(mesh_TimeWheel01_Reality02_L0)

				// Fall 
				const geo_TimeWheel01_Reality03_L0 = new THREE.SphereGeometry(20000, 32, 32)
				const mat_TimeWheel01_Reality03_L0 = new THREE.MeshBasicMaterial({ map: TimeReality03, side: THREE.DoubleSide });
				mesh_TimeWheel01_Reality03_L0 = new THREE.Mesh(geo_TimeWheel01_Reality03_L0, mat_TimeWheel01_Reality03_L0)
				mat_TimeWheel01_Reality03_L0.transparent = false;
				// mat_TimeWheel01_Reality03_L0.alphaMap = TimeWheel01_Reality03Im0_01
				mat_TimeWheel01_Reality03_L0.wireframe = false;
				mesh_TimeWheel01_Reality03_L0.rotateZ( - Math.PI / 2 );
				mesh_TimeWheel01_Reality03_L0.position.set(-100000, 0, 200)
				mesh_TimeWheel01_Reality03_L0.scale.set(3, 3, 3)
				mesh_TimeWheel01_Reality03_L0.rotation.set(0, 0, -1.7)
				TimeWheel01.add(mesh_TimeWheel01_Reality03_L0)

				// Winter
				const geo_TimeWheel01_Reality04_L0 = new THREE.SphereGeometry(20000, 32, 32)
				const mat_TimeWheel01_Reality04_L0 = new THREE.MeshBasicMaterial({ map: TimeReality04, side: THREE.DoubleSide });
				mesh_TimeWheel01_Reality04_L0 = new THREE.Mesh(geo_TimeWheel01_Reality04_L0, mat_TimeWheel01_Reality04_L0)
				mat_TimeWheel01_Reality04_L0.transparent = false;
				// mat_TimeWheel01_Reality04_L0.alphaMap = TimeWheel01_Reality04Im0_01
				mat_TimeWheel01_Reality04_L0.wireframe = false;
				mesh_TimeWheel01_Reality04_L0.position.set(0, -100000, 200)
				mesh_TimeWheel01_Reality04_L0.scale.set(3, 3, 3)
				TimeWheel01.add(mesh_TimeWheel01_Reality04_L0)


				// Final TimeWheel
				scene.add(TimeWheel01)