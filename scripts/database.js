/**  Managing the application state
Providing Seed Data
Converting transient state into a permanent state
Modifies permanent state and transient state based on user input*/

const database = {
    transientState: {
        facilityId: 0,
        mineralFacilityId: 0,
        governorId: 0
    },
    governors: [
        {
            id: 1,
            name: "Bill Hillsman",
            active: true
        },
        {
            id: 2,
            name: "Brock Rocksman",
            active: true
        },
        {
            id: 3,
            name: "Ally Valleysman",
            active: true
        },
        {
            id: 4,
            name: "Bre Treesman",
            active: true
        },
        {
            id: 5,
            name: "Rand Sandsman",
            active: false
        },
        {
            id: 6,
            name: "Doug Bugsman",
            active: true
        }
    ],
    facilities: [
        {
            id: 1,
            name: "Coruscant Industries",
            active: true
        },
        {
            id: 2,
            name: "Cloud City Mining Conglomerate",
            active: true
        },
        {
            id: 3,
            name: "Gungan Galactica Group",
            active: true
        },
        {
            id: 4,
            name: "Mos Eisely Enterprises",
            active: true
        },
        {
            id: 5,
            name: "Theed Inc.",
            active: false
        },
        {
            id: 6,
            name: "Endor Enterprises",
            active: true
        }
    ],
    colonies: [
        {
            id: 1,
            name: "Emerald Nova"
        },
        {
            id: 2,
            name: "Onyx Origin"
        },
        {
            id: 3,
            name: "Aurora Sirius"
        },
        {
            id: 4,
            name: "Rising Galaxy"
        },
        {
            id: 5,
            name: "Arrakis"
        },
        {
            id: 6,
            name: "Crescent Bellatrix"
        }
    ],
    minerals: [
        {
            id: 1,
            name: "Calcites"
        },
        {
            id: 2,
            name: "Iron Pyrite"
        },
        {
            id: 3,
            name: "Potassium Feldspar"
        },
        {
            id: 4,
            name: "Salt"
        },
        {
            id: 5,
            name: "Micas"
        },
        {
            id: 6,
            name: "Fluorites"
        }
    ],
    colonyMinerals: [
        {
            id: 1,
            colonyId: 1,
            mineralId: 1,
            amount: 10
        },
        {
            id: 2,
            colonyId: 1,
            mineralId: 2,
            amount: 20
        },
        {
            id: 3,
            colonyId: 5,
            mineralId: 3,
            amount: 30
        },
        {
            id: 4,
            colonyId: 2,
            mineralId: 6,
            amount: 50
        },
        {
            id: 5,
            colonyId: 3,
            mineralId: 2,
            amount: 100
        },
        {
            id: 6,
            colonyId: 4,
            mineralId: 5,
            amount: 1
        }
    ],
    facilityMinerals: [
        {
            id: 1,
            facilityId: 1,
            mineralId: 1,
            amount: 10
        },
        {
            id: 2,
            facilityId: 1,
            mineralId: 2,
            amount: 20
        },
        {
            id: 3,
            facilityId: 5,
            mineralId: 3,
            amount: 30
        },
        {
            id: 4,
            facilityId: 2,
            mineralId: 6,
            amount: 50
        },
        {
            id: 5,
            facilityId: 3,
            mineralId: 2,
            amount: 100
        },
        {
            id: 6,
            facilityId: 4,
            mineralId: 5,
            amount: 1
        }
    ]
}
export const getGovernors = () => {
    return database.governors.map(governors => ({ ...governors }))
}
export const setGovernor = (governorId) => {
    database.transientState.governorId = governorId
    // document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

export const getFacilities = () => {
    return database.facilities.map(f => ({ ...f }))
}

export const purchaseMineral = () => {

    // Broadcast custom event to entire documement so that the
    // application can re-render and update state
    document.dispatchEvent(new CustomEvent("stateChanged"))
}

