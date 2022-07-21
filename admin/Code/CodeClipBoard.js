//#########################################
				// # DataTower_RectPanels_Decoration_E
				//#########################################


				// ---\## [DataTower_RectPanels_Decoration] Start\ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
				/** 
				  * |- Details _D
 					*/

                DataTower_RectPanels_Decoration_E1_L0 = new THREE.Group()
                DataTower_RectPanels_Decoration_E1_L0.position.set(0, 90000, 0)
    
    
                
                // ---\### [DataTower_RectPanel_Front_B1_L0] Start\ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                /** 
                   * |- # Title: Front Card
                   * |-- Details
                    */
                DataTower_RectPanel_Front_E1_L0 = new THREE.Group()
                DataTower_RectPanel_Front_E1_L0.position.set(0, 10, -15000)
                DataTower_RectPanel_Front_E1_L0.lookAt(0, 0, 0)
    
                const geo_DataTower_RectPanels_Decoration_E1_L0 = new THREE.PlaneGeometry(4500, 9000)
                const mat_DataTower_RectPanels_Decoration_E1_L0 = new THREE.MeshStandardMaterial({ map: DTD01, side: THREE.DoubleSide });
                mesh_DataTower_RectPanels_Decoration_E1_L0 = new THREE.Mesh(geo_DataTower_RectPanels_Decoration_E1_L0, mat_DataTower_RectPanels_Decoration_E1_L0);
                mat_DataTower_RectPanels_Decoration_E1_L0.transparent = false;
                mat_DataTower_RectPanels_Decoration_E1_L0.alphaMap = DTD01;
                mesh_DataTower_RectPanels_Decoration_E1_L0.position.set(0, 10, 0); 
                // mesh_DataTower_RectPanels_Decoration_E1_L0.rotateX( - Math.PI / 2 );
                mesh_DataTower_RectPanels_Decoration_E1_L0.scale.set(2, 2, 2)
                mesh_DataTower_RectPanels_Decoration_E1_L0.lookAt(0, 10, 0)
                DataTower_RectPanel_Front_E1_L0.add(mesh_DataTower_RectPanels_Decoration_E1_L0)
    
                // Front Card Frame
                const geo_DataTower_RectPanels_DecorationPanels_E1_L0 = new THREE.PlaneGeometry(7500, 15000)
                const mat_DataTower_RectPanels_DecorationPanels_E1_L0 = new THREE.MeshStandardMaterial({ map: DTDB01, side: THREE.DoubleSide });
                mesh_DataTower_RectPanels_DecorationPanels_E1_L0 = new THREE.Mesh(geo_DataTower_RectPanels_DecorationPanels_E1_L0, mat_DataTower_RectPanels_DecorationPanels_E1_L0);
                mat_DataTower_RectPanels_DecorationPanels_E1_L0.transparent = true;
                mat_DataTower_RectPanels_DecorationPanels_E1_L0.alphaMap = DTDB01;
                mesh_DataTower_RectPanels_DecorationPanels_E1_L0.position.set(0, 10, -1000); 
                // mesh_DataTower_RectPanels_DecorationPanels_E1_L0.rotateX( - Math.PI / 2 );
                mesh_DataTower_RectPanels_DecorationPanels_E1_L0.scale.set(2, 2, 2)
                mesh_DataTower_RectPanels_DecorationPanels_E1_L0.lookAt(0, 10, 0)
                DataTower_RectPanel_Front_E1_L0.add(mesh_DataTower_RectPanels_DecorationPanels_E1_L0)
    
                DataTower_RectPanels_Decoration_E1_L0.add(DataTower_RectPanel_Front_E1_L0)				
                // ---\### [DataTower_RectPanels_Decoration] End\ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    
                
                
                // ---\### [DataTower_RectPanel_Back_E1_L0] Start\ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                /** 
                   * |- # Title: Back Card
                   * |-- Details
                    */
                DataTower_RectPanel_Back_E1_L0 = new THREE.Group()
                DataTower_RectPanel_Back_E1_L0.position.set(0, 10, 15000)
                DataTower_RectPanel_Back_E1_L0.lookAt(0, 0, 0)
                
                const geo_DataTower_RectPanels_Decoration_E2_L0 = new THREE.PlaneGeometry(4500, 9000)
                const mat_DataTower_RectPanels_Decoration_E2_L0 = new THREE.MeshStandardMaterial({ map: DTD01, side: THREE.DoubleSide });
                mesh_DataTower_RectPanels_Decoration_E2_L0 = new THREE.Mesh(geo_DataTower_RectPanels_Decoration_E2_L0, mat_DataTower_RectPanels_Decoration_E2_L0);
                mat_DataTower_RectPanels_Decoration_E2_L0.transparent = false;
                mat_DataTower_RectPanels_Decoration_E2_L0.alphaMap = DTD01;
                mesh_DataTower_RectPanels_Decoration_E2_L0.position.set(0, 10, 0); 
                // mesh_DataTower_RectPanels_Decoration_E2_L0.rotateX( - Math.PI / 2 );
                mesh_DataTower_RectPanels_Decoration_E2_L0.scale.set(2, 2, 2)
                mesh_DataTower_RectPanels_Decoration_E2_L0.lookAt(0, 10, 0)
                DataTower_RectPanel_Back_E1_L0.add(mesh_DataTower_RectPanels_Decoration_E2_L0)
    
                // Back Card Frame
                const geo_DataTower_RectPanels_DecorationPanels_E2_L0 = new THREE.PlaneGeometry(7500, 15000)
                const mat_DataTower_RectPanels_DecorationPanels_E2_L0 = new THREE.MeshStandardMaterial({ map: DTDB01, side: THREE.DoubleSide });
                mesh_DataTower_RectPanels_DecorationPanels_E2_L0 = new THREE.Mesh(geo_DataTower_RectPanels_DecorationPanels_E2_L0, mat_DataTower_RectPanels_DecorationPanels_E2_L0);
                mat_DataTower_RectPanels_DecorationPanels_E2_L0.transparent = true;
                mat_DataTower_RectPanels_DecorationPanels_E2_L0.alphaMap = DTDB01;
                mesh_DataTower_RectPanels_DecorationPanels_E2_L0.position.set(0, 10, -1000); 
                // mesh_DataTower_RectPanels_DecorationPanels_E2_L0.rotateX( - Math.PI / 2 );
                mesh_DataTower_RectPanels_DecorationPanels_E2_L0.scale.set(2, 2, 2)
                mesh_DataTower_RectPanels_DecorationPanels_E2_L0.lookAt(0, 10, 0)
                DataTower_RectPanel_Back_E1_L0.add(mesh_DataTower_RectPanels_DecorationPanels_E2_L0)
    
                // Final Push to DTD Rect Panels Decoration A1_L0
                DataTower_RectPanels_Decoration_E1_L0.add(DataTower_RectPanel_Back_E1_L0)	
                // ---\### [DataTower_RectPanels_Decoration] End\ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    
    
                
                // ---\### [DataTower_RectPanel_Left_E1_L0] Start\ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                /** 
                   * |- # Title: Left Card
                   * |-- Details
                    */
                DataTower_RectPanel_Left_E1_L0 = new THREE.Group()
                DataTower_RectPanel_Left_E1_L0.position.set(-15000, 10, 0)
                DataTower_RectPanel_Left_E1_L0.lookAt(0, 0, 0)
    
                const geo_DataTower_RectPanels_Decoration_E3_L0 = new THREE.PlaneGeometry(4500, 9000)
                const mat_DataTower_RectPanels_Decoration_E3_L0 = new THREE.MeshStandardMaterial({ map: DTD01, side: THREE.DoubleSide });
                mesh_DataTower_RectPanels_Decoration_E3_L0 = new THREE.Mesh(geo_DataTower_RectPanels_Decoration_E3_L0, mat_DataTower_RectPanels_Decoration_E3_L0);
                mat_DataTower_RectPanels_Decoration_E3_L0.transparent = false;
                mat_DataTower_RectPanels_Decoration_E3_L0.alphaMap = DTD01;
                mesh_DataTower_RectPanels_Decoration_E3_L0.position.set(0, 10, 0); 
                // mesh_DataTower_RectPanels_Decoration_E3_L0.rotateX( - Math.PI / 2 );
                mesh_DataTower_RectPanels_Decoration_E3_L0.scale.set(2, 2, 2)
                mesh_DataTower_RectPanels_Decoration_E3_L0.lookAt(0, 10, 0)
                DataTower_RectPanel_Left_E1_L0.add(mesh_DataTower_RectPanels_Decoration_E3_L0)
    
                // Left Card Frame
                const geo_DataTower_RectPanels_DecorationPanels_E3_L0 = new THREE.PlaneGeometry(7500, 15000)
                const mat_DataTower_RectPanels_DecorationPanels_E3_L0 = new THREE.MeshStandardMaterial({ map: DTDB01, side: THREE.DoubleSide });
                mesh_DataTower_RectPanels_DecorationPanels_E3_L0 = new THREE.Mesh(geo_DataTower_RectPanels_DecorationPanels_E3_L0, mat_DataTower_RectPanels_DecorationPanels_E3_L0);
                mat_DataTower_RectPanels_DecorationPanels_E3_L0.transparent = true;
                mat_DataTower_RectPanels_DecorationPanels_E3_L0.alphaMap = DTDB01;
                mesh_DataTower_RectPanels_DecorationPanels_E3_L0.position.set(0, 10, -1000); 
                // mesh_DataTower_RectPanels_DecorationPanels_E3_L0.rotateX( - Math.PI / 2 );
                mesh_DataTower_RectPanels_DecorationPanels_E3_L0.scale.set(2, 2, 2)
                mesh_DataTower_RectPanels_DecorationPanels_E3_L0.lookAt(0, 10, 0)
                DataTower_RectPanel_Left_E1_L0.add(mesh_DataTower_RectPanels_DecorationPanels_E3_L0)
    
                // Final Push to DTD Rect Panels Decoration A1_L0
                DataTower_RectPanels_Decoration_E1_L0.add(DataTower_RectPanel_Left_E1_L0)	
    
                // ---\### [DataTower_RectPanels_Decoration] End\ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    
    
    
       
                // ---\### [DataTower_RectPanel_Right_E1_L0] Start\ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                /** 
                   * |- # Title: Right Card
                   * |-- Details
                    */
                DataTower_RectPanel_Right_E1_L0 = new THREE.Group()
                DataTower_RectPanel_Right_E1_L0.position.set(15000, 10, 0)
                DataTower_RectPanel_Right_E1_L0.lookAt(0, 0, 0)
    
                // Right Card
                const geo_DataTower_RectPanels_Decoration_E4_L0 = new THREE.PlaneGeometry(4500, 9000)
                const mat_DataTower_RectPanels_Decoration_E4_L0 = new THREE.MeshStandardMaterial({ map: DTD01, side: THREE.DoubleSide });
                mesh_DataTower_RectPanels_Decoration_E4_L0 = new THREE.Mesh(geo_DataTower_RectPanels_Decoration_E4_L0, mat_DataTower_RectPanels_Decoration_E4_L0);
                mat_DataTower_RectPanels_Decoration_E4_L0.transparent = false;
                mat_DataTower_RectPanels_Decoration_E4_L0.alphaMap = DTD01;
                mesh_DataTower_RectPanels_Decoration_E4_L0.position.set(0, 10, 0); 
                // mesh_DataTower_RectPanels_Decoration_E4_L0.rotateX( - Math.PI / 2 );
                mesh_DataTower_RectPanels_Decoration_E4_L0.scale.set(2, 2, 2)
                mesh_DataTower_RectPanels_Decoration_E4_L0.lookAt(0, 10, 0)
                DataTower_RectPanel_Right_E1_L0.add(mesh_DataTower_RectPanels_Decoration_E4_L0)
    
                // Right Card Frame
                const geo_DataTower_RectPanels_DecorationPanels_E4_L0 = new THREE.PlaneGeometry(7500, 15000)
                const mat_DataTower_RectPanels_DecorationPanels_E4_L0 = new THREE.MeshStandardMaterial({ map: DTDB01, side: THREE.DoubleSide });
                mesh_DataTower_RectPanels_DecorationPanels_E4_L0 = new THREE.Mesh(geo_DataTower_RectPanels_DecorationPanels_E4_L0, mat_DataTower_RectPanels_DecorationPanels_E4_L0);
                mat_DataTower_RectPanels_DecorationPanels_E4_L0.transparent = true;
                mat_DataTower_RectPanels_DecorationPanels_E4_L0.alphaMap = DTDB01;
                mesh_DataTower_RectPanels_DecorationPanels_E4_L0.position.set(0, 10, -500); 
                // mesh_DataTower_RectPanels_DecorationPanels_E4_L0.rotateX( - Math.PI / 2 );
                mesh_DataTower_RectPanels_DecorationPanels_E4_L0.scale.set(2, 2, 2)
                mesh_DataTower_RectPanels_DecorationPanels_E4_L0.lookAt(0, 10, 0)
                DataTower_RectPanel_Right_E1_L0.add(mesh_DataTower_RectPanels_DecorationPanels_E4_L0)
    
                // Final Push to DTD Rect Panels Decoration A1_L0
                DataTower_RectPanels_Decoration_E1_L0.add(DataTower_RectPanel_Right_E1_L0)	
    
                // ---\### [DataTower_RectPanel_Right_E1_L0] End\ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    
    
                // ---\### [DataTower_RectPanel_FrontRight_E1_L0] Start\ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                /** 
                   * |- # Title: Front Card
                   * |-- Status: Done @ 11:29 @ 3/14/22 @ Laboure
                    */
                DataTower_RectPanel_FrontRight_E1_L0 = new THREE.Group()
                DataTower_RectPanel_FrontRight_E1_L0.position.set(10000, 10, -10000)
                DataTower_RectPanel_FrontRight_E1_L0.lookAt(0, 0, 0)
    
                // Front Right Card
                const geo_DataTower_RectPanels_Decoration_E5_L0 = new THREE.PlaneGeometry(4500, 9000)
                const mat_DataTower_RectPanels_Decoration_E5_L0 = new THREE.MeshStandardMaterial({ map: DTD01, side: THREE.DoubleSide });
                mesh_DataTower_RectPanels_Decoration_E5_L0 = new THREE.Mesh(geo_DataTower_RectPanels_Decoration_E5_L0, mat_DataTower_RectPanels_Decoration_E5_L0);
                mat_DataTower_RectPanels_Decoration_E5_L0.transparent = false;
                mat_DataTower_RectPanels_Decoration_E5_L0.alphaMap = DTD01;
                mesh_DataTower_RectPanels_Decoration_E5_L0.position.set(0, 10, 0); 
                // mesh_DataTower_RectPanels_Decoration_E5_L0.rotateX( - Math.PI / 2 );
                mesh_DataTower_RectPanels_Decoration_E5_L0.scale.set(2, 2, 2)
                mesh_DataTower_RectPanels_Decoration_E5_L0.lookAt(0, 10, 0)
                DataTower_RectPanel_FrontRight_E1_L0.add(mesh_DataTower_RectPanels_Decoration_E5_L0)
    
                // Front Right Card Frame
                const geo_DataTower_RectPanels_DecorationPanels_E5_L0 = new THREE.PlaneGeometry(7500, 15000)
                const mat_DataTower_RectPanels_DecorationPanels_E5_L0 = new THREE.MeshStandardMaterial({ map: DTDB01, side: THREE.DoubleSide });
                mesh_DataTower_RectPanels_DecorationPanels_E5_L0 = new THREE.Mesh(geo_DataTower_RectPanels_DecorationPanels_E5_L0, mat_DataTower_RectPanels_DecorationPanels_E5_L0);
                mat_DataTower_RectPanels_DecorationPanels_E5_L0.transparent = true;
                mat_DataTower_RectPanels_DecorationPanels_E5_L0.alphaMap = DTDB01;
                mesh_DataTower_RectPanels_DecorationPanels_E5_L0.position.set(0, 10, -1000); 
                mesh_DataTower_RectPanels_DecorationPanels_E5_L0.rotation.set(0, 0, 0); 
                // mesh_DataTower_RectPanels_DecorationPanels_E5_L0.rotateX( - Math.PI / 2 );
                mesh_DataTower_RectPanels_DecorationPanels_E5_L0.scale.set(2, 2, 2)
                mesh_DataTower_RectPanels_DecorationPanels_E5_L0.lookAt(0, 10, 0)
                mesh_DataTower_RectPanels_DecorationPanels_E5_L0.rotation.set(0, 0, 0)
                DataTower_RectPanel_FrontRight_E1_L0.add(mesh_DataTower_RectPanels_DecorationPanels_E5_L0)
    
                // Final Push to DTD Rect Panels Decoration A1_L0
                DataTower_RectPanels_Decoration_E1_L0.add(DataTower_RectPanel_FrontRight_E1_L0)	
    
                // ---\### [DataTower_RectPanel_FrontRight_E1_L0] End\ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    
    
                // ---\### [DataTower_RectPanel_Right_E1_L0] Start\ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                /** 
                   * |- # Title: Left Card
                   * |-- Status: Done
                    */
                DataTower_RectPanel_BackRight_E1_L0 = new THREE.Group()
                DataTower_RectPanel_BackRight_E1_L0.position.set(10000, 10, 10000)
                DataTower_RectPanel_BackRight_E1_L0.lookAt(0, 0, 0)
    
                // Back Right Card
                const geo_DataTower_RectPanels_Decoration_E6_L0 = new THREE.PlaneGeometry(4500, 9000)
                const mat_DataTower_RectPanels_Decoration_E6_L0 = new THREE.MeshStandardMaterial({ map: DTD01, side: THREE.DoubleSide });
                mesh_DataTower_RectPanels_Decoration_E6_L0 = new THREE.Mesh(geo_DataTower_RectPanels_Decoration_E6_L0, mat_DataTower_RectPanels_Decoration_E6_L0);
                mat_DataTower_RectPanels_Decoration_E6_L0.transparent = false;
                mat_DataTower_RectPanels_Decoration_E6_L0.alphaMap = DTD01;
                mesh_DataTower_RectPanels_Decoration_E6_L0.position.set(0, 10, 0); 
                // mesh_DataTower_RectPanels_Decoration_E6_L0.rotateX( - Math.PI / 2 );
                mesh_DataTower_RectPanels_Decoration_E6_L0.scale.set(2, 2, 2)
                mesh_DataTower_RectPanels_Decoration_E6_L0.lookAt(0, 10, 0)
                DataTower_RectPanel_BackRight_E1_L0.add(mesh_DataTower_RectPanels_Decoration_E6_L0)
    
                // Back Right Card Frame
                const geo_DataTower_RectPanels_DecorationPanels_E6_L0 = new THREE.PlaneGeometry(7500, 15000)
                const mat_DataTower_RectPanels_DecorationPanels_E6_L0 = new THREE.MeshStandardMaterial({ map: DTDB01, side: THREE.DoubleSide });
                mesh_DataTower_RectPanels_DecorationPanels_E6_L0 = new THREE.Mesh(geo_DataTower_RectPanels_DecorationPanels_E6_L0, mat_DataTower_RectPanels_DecorationPanels_E6_L0);
                mat_DataTower_RectPanels_DecorationPanels_E6_L0.transparent = true;
                mat_DataTower_RectPanels_DecorationPanels_E6_L0.alphaMap = DTDB01;
                mesh_DataTower_RectPanels_DecorationPanels_E6_L0.position.set(0, 10, -1000); 
                // mesh_DataTower_RectPanels_DecorationPanels_E6_L0.rotateX( - Math.PI / 2 );
                mesh_DataTower_RectPanels_DecorationPanels_E6_L0.scale.set(2, 2, 2)
                mesh_DataTower_RectPanels_DecorationPanels_E6_L0.lookAt(0, 10, 0)
                DataTower_RectPanel_BackRight_E1_L0.add(mesh_DataTower_RectPanels_DecorationPanels_E6_L0)
    
    
                // Final Push to DTD Rect Panels Decoration A1_L0
                DataTower_RectPanels_Decoration_E1_L0.add(DataTower_RectPanel_BackRight_E1_L0)	
                // ---\### [DataTower_RectPanel_Right_E1_L0] End\ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                
    
                // ---\### [DataTower_RectPanel_Right_E1_L0] Start\ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                /** 
                   * |- # Title: Left Card
                   * |-- Status: Done
                    */
                DataTower_RectPanel_BackLeft_E1_L0 = new THREE.Group()
                DataTower_RectPanel_BackLeft_E1_L0.position.set(-10000, 10, 10000)
                DataTower_RectPanel_BackLeft_E1_L0.lookAt(0, 0, 0)
    
                // Back Left Card
                const geo_DataTower_RectPanels_Decoration_E7_L0 = new THREE.PlaneGeometry(4500, 9000)
                const mat_DataTower_RectPanels_Decoration_E7_L0 = new THREE.MeshStandardMaterial({ map: DTD01, side: THREE.DoubleSide });
                mesh_DataTower_RectPanels_Decoration_E7_L0 = new THREE.Mesh(geo_DataTower_RectPanels_Decoration_E7_L0, mat_DataTower_RectPanels_Decoration_E7_L0);
                mat_DataTower_RectPanels_Decoration_E7_L0.transparent = false;
                mat_DataTower_RectPanels_Decoration_E7_L0.alphaMap = DTD01;
                mesh_DataTower_RectPanels_Decoration_E7_L0.position.set(0, 10, 0); 
                // mesh_DataTower_RectPanels_Decoration_E7_L0.rotateX( - Math.PI / 2 );
                mesh_DataTower_RectPanels_Decoration_E7_L0.scale.set(2, 2, 2)
                mesh_DataTower_RectPanels_Decoration_E7_L0.lookAt(0, 10, 0)
                DataTower_RectPanel_BackLeft_E1_L0.add(mesh_DataTower_RectPanels_Decoration_E7_L0)
    
                // Back Left Card Frame
                const geo_DataTower_RectPanels_DecorationPanels_E7_L0 = new THREE.PlaneGeometry(7500, 15000)
                const mat_DataTower_RectPanels_DecorationPanels_E7_L0 = new THREE.MeshStandardMaterial({ map: DTDB01, side: THREE.DoubleSide });
                mesh_DataTower_RectPanels_DecorationPanels_E7_L0 = new THREE.Mesh(geo_DataTower_RectPanels_DecorationPanels_E7_L0, mat_DataTower_RectPanels_DecorationPanels_E7_L0);
                mat_DataTower_RectPanels_DecorationPanels_E7_L0.transparent = true;
                mat_DataTower_RectPanels_DecorationPanels_E7_L0.alphaMap = DTDB01;
                mesh_DataTower_RectPanels_DecorationPanels_E7_L0.position.set(0, 10, -1000); 
                // mesh_DataTower_RectPanels_DecorationPanels_E7_L0.rotateX( - Math.PI / 2 );
                mesh_DataTower_RectPanels_DecorationPanels_E7_L0.scale.set(2, 2, 2)
                mesh_DataTower_RectPanels_DecorationPanels_E7_L0.lookAt(0, 10, 0)
                DataTower_RectPanel_BackLeft_E1_L0.add(mesh_DataTower_RectPanels_DecorationPanels_E7_L0)
    
                // Final Push to DTD Rect Panels Decoration A1_L0
                DataTower_RectPanels_Decoration_E1_L0.add(DataTower_RectPanel_BackLeft_E1_L0)	
                // ---\### [DataTower_RectPanel_Right_B1_L0] End\ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    
    
                // ---\### [DataTower_RectPanel_Right_B1_L0] Start\ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                /** 
                   * |- # Title: FrontLeft Card
                   * |-- Details
                    */
                DataTower_RectPanel_FrontLeft_E1_L0 = new THREE.Group()
                DataTower_RectPanel_FrontLeft_E1_L0.position.set(-10000, 10, -10000)
                DataTower_RectPanel_FrontLeft_E1_L0.lookAt(0, 0, 0)
    
                // Front Left Card
                const geo_DataTower_RectPanels_Decoration_E8_L0 = new THREE.PlaneGeometry(4500, 9000)
                const mat_DataTower_RectPanels_Decoration_E8_L0 = new THREE.MeshStandardMaterial({ map: DTD01, side: THREE.DoubleSide });
                mesh_DataTower_RectPanels_Decoration_E8_L0 = new THREE.Mesh(geo_DataTower_RectPanels_Decoration_E8_L0, mat_DataTower_RectPanels_Decoration_E8_L0);
                mat_DataTower_RectPanels_Decoration_E8_L0.transparent = false;
                mat_DataTower_RectPanels_Decoration_E8_L0.alphaMap = DTD01;
                mesh_DataTower_RectPanels_Decoration_E8_L0.position.set(0, 10, 0); 
                // mesh_DataTower_RectPanels_Decoration_E8_L0.rotateX( - Math.PI / 2 );
                mesh_DataTower_RectPanels_Decoration_E8_L0.scale.set(2, 2, 2)
                mesh_DataTower_RectPanels_Decoration_E8_L0.lookAt(0, 10, 0)
                DataTower_RectPanel_FrontLeft_E1_L0.add(mesh_DataTower_RectPanels_Decoration_E8_L0)
    
                // Front Left Card Frame
                const geo_DataTower_RectPanels_DecorationPanels_E8_L0 = new THREE.PlaneGeometry(7500, 15000)
                const mat_DataTower_RectPanels_DecorationPanels_E8_L0 = new THREE.MeshStandardMaterial({ map: DTDB01, side: THREE.DoubleSide });
                mesh_DataTower_RectPanels_DecorationPanels_E8_L0 = new THREE.Mesh(geo_DataTower_RectPanels_DecorationPanels_E8_L0, mat_DataTower_RectPanels_DecorationPanels_E8_L0);
                mat_DataTower_RectPanels_DecorationPanels_E8_L0.transparent = true;
                mat_DataTower_RectPanels_DecorationPanels_E8_L0.alphaMap = DTDB01;
                mesh_DataTower_RectPanels_DecorationPanels_E8_L0.position.set(0, 10, -1000); 
                // mesh_DataTower_RectPanels_DecorationPanels_E8_L0.rotateX( - Math.PI / 2 );
                mesh_DataTower_RectPanels_DecorationPanels_E8_L0.scale.set(2, 2, 2)
                mesh_DataTower_RectPanels_DecorationPanels_E8_L0.lookAt(0, 10, 0)
                DataTower_RectPanel_FrontLeft_E1_L0.add(mesh_DataTower_RectPanels_DecorationPanels_E8_L0)
    
    
                // Final Push to DTD Rect Panels Decoration A1_L0
                DataTower_RectPanels_Decoration_E1_L0.add(DataTower_RectPanel_FrontLeft_E1_L0)	
                // ---\### [DataTower_RectPanel_Right_E1_L0] End\ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    
    
                scene.add(DataTower_RectPanels_Decoration_E1_L0)
                // ---\## [DataTower_RectPanels_Decoration] End\ @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@