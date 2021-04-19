{
	"contents": {
		"7a51a144-6472-4c87-a3b3-a1a03693edeb": {
			"classDefinition": "com.sap.bpm.wfs.Model",
			"id": "scflow",
			"subject": "scflow",
			"name": "scflow",
			"documentation": "sc workflow",
			"lastIds": "62d7f4ed-4063-4c44-af8b-39050bd44926",
			"events": {
				"11a9b5ee-17c0-4159-9bbf-454dcfdcd5c3": {
					"name": "StartEvent1"
				},
				"2798f4e7-bc42-4fad-a248-159095a2f40a": {
					"name": "EndEvent1"
				}
			},
			"activities": {
				"4a615093-82e0-497d-a2bf-549915c797fa": {
					"name": "Approval"
				}
			},
			"sequenceFlows": {
				"c6b99f32-5fe6-4ab6-b60a-80fba1b9ae0f": {
					"name": "SequenceFlow1"
				},
				"4c75086c-8553-4fa3-99d2-7cae76051ea9": {
					"name": "SequenceFlow2"
				}
			},
			"diagrams": {
				"42fa7a2d-c526-4a02-b3ba-49b5168ba644": {}
			}
		},
		"11a9b5ee-17c0-4159-9bbf-454dcfdcd5c3": {
			"classDefinition": "com.sap.bpm.wfs.StartEvent",
			"id": "startevent1",
			"name": "StartEvent1"
		},
		"2798f4e7-bc42-4fad-a248-159095a2f40a": {
			"classDefinition": "com.sap.bpm.wfs.EndEvent",
			"id": "endevent1",
			"name": "EndEvent1"
		},
		"c6b99f32-5fe6-4ab6-b60a-80fba1b9ae0f": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow1",
			"name": "SequenceFlow1",
			"sourceRef": "11a9b5ee-17c0-4159-9bbf-454dcfdcd5c3",
			"targetRef": "4a615093-82e0-497d-a2bf-549915c797fa"
		},
		"42fa7a2d-c526-4a02-b3ba-49b5168ba644": {
			"classDefinition": "com.sap.bpm.wfs.ui.Diagram",
			"symbols": {
				"df898b52-91e1-4778-baad-2ad9a261d30e": {},
				"53e54950-7757-4161-82c9-afa7e86cff2c": {},
				"6bb141da-d485-4317-93b8-e17711df4c32": {},
				"5e3f1dc2-7de6-4db4-80f8-ce24164b218b": {},
				"5d5b6bd8-efd0-4970-b39e-536c5cf09ab5": {}
			}
		},
		"df898b52-91e1-4778-baad-2ad9a261d30e": {
			"classDefinition": "com.sap.bpm.wfs.ui.StartEventSymbol",
			"x": 100,
			"y": 100,
			"width": 32,
			"height": 32,
			"object": "11a9b5ee-17c0-4159-9bbf-454dcfdcd5c3"
		},
		"53e54950-7757-4161-82c9-afa7e86cff2c": {
			"classDefinition": "com.sap.bpm.wfs.ui.EndEventSymbol",
			"x": 340,
			"y": 100,
			"width": 35,
			"height": 35,
			"object": "2798f4e7-bc42-4fad-a248-159095a2f40a"
		},
		"6bb141da-d485-4317-93b8-e17711df4c32": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "116,117 226,117",
			"sourceSymbol": "df898b52-91e1-4778-baad-2ad9a261d30e",
			"targetSymbol": "5e3f1dc2-7de6-4db4-80f8-ce24164b218b",
			"object": "c6b99f32-5fe6-4ab6-b60a-80fba1b9ae0f"
		},
		"62d7f4ed-4063-4c44-af8b-39050bd44926": {
			"classDefinition": "com.sap.bpm.wfs.LastIDs",
			"timereventdefinition": 1,
			"sequenceflow": 2,
			"startevent": 1,
			"endevent": 1,
			"usertask": 1
		},
		"4a615093-82e0-497d-a2bf-549915c797fa": {
			"classDefinition": "com.sap.bpm.wfs.UserTask",
			"subject": "Approval",
			"description": "Approve task with in 3 days",
			"priority": "MEDIUM",
			"isHiddenInLogForParticipant": false,
			"supportsForward": false,
			"userInterface": "sapui5://scuploadui.comnikesctuiscapproveui/com.nike.sc.tui.scapproveui",
			"recipientUsers": "${info.startedBy}",
			"id": "usertask1",
			"name": "Approval",
			"documentation": "Approval",
			"dueDateRef": "a0683c00-e647-4ab7-93d0-9ebe1bfcd70a"
		},
		"5e3f1dc2-7de6-4db4-80f8-ce24164b218b": {
			"classDefinition": "com.sap.bpm.wfs.ui.UserTaskSymbol",
			"x": 176,
			"y": 88,
			"width": 100,
			"height": 60,
			"object": "4a615093-82e0-497d-a2bf-549915c797fa"
		},
		"4c75086c-8553-4fa3-99d2-7cae76051ea9": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow2",
			"name": "SequenceFlow2",
			"sourceRef": "4a615093-82e0-497d-a2bf-549915c797fa",
			"targetRef": "2798f4e7-bc42-4fad-a248-159095a2f40a"
		},
		"5d5b6bd8-efd0-4970-b39e-536c5cf09ab5": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "226,117.75 357.5,117.75",
			"sourceSymbol": "5e3f1dc2-7de6-4db4-80f8-ce24164b218b",
			"targetSymbol": "53e54950-7757-4161-82c9-afa7e86cff2c",
			"object": "4c75086c-8553-4fa3-99d2-7cae76051ea9"
		},
		"a0683c00-e647-4ab7-93d0-9ebe1bfcd70a": {
			"classDefinition": "com.sap.bpm.wfs.TimerEventDefinition",
			"timeDuration": "P3D",
			"id": "timereventdefinition1"
		}
	}
}