				//#########################################
				// # TimeTunnel
				//#########################################
				TimeTunnelA = new THREE.Group()
				TimeTunnelA.position.set(0, 0, 0)

				const geo_TimeTunnelA01_L0 = new THREE.TorusGeometry(70000, 30000, 16, 32, Math.PI * 2 )
				const mat_TimeTunnelA01_L0 = new THREE.MeshBasicMaterial({ map: testImg05, side: THREE.DoubleSide });
				mesh_TimeTunnelA01_L0 = new THREE.Mesh(geo_TimeTunnelA01_L0, mat_TimeTunnelA01_L0);
				mat_TimeTunnelA01_L0.transparent = false;
				mat_TimeTunnelA01_L0.alphaMap = testImg05;
				mesh_TimeTunnelA01_L0.position.set(0, 70000, 0); // 9000 = floor w/o cut
				// mesh_TimeTunnelA01_L0.rotateX( - Math.PI / 2 );
				// mesh_TimeTunnelA01_L0.scale.y = 90
				TimeTunnelA.add(mesh_TimeTunnelA01_L0)

				scene.add(TimeTunnelA);