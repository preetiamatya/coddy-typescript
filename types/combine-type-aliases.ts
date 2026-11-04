// Create type aliases for Username, UserAge, ContactMethod, UserProfile, and AdminProfile
type Username = string;
type UserAge = number;
type ContactMethod = Username | UserAge;

type UserProfile = {
    id: number;
    displayName: Username;
    preferredContact: ContactMethod;
};

type AdminProfile = UserProfile & {
    permissions: string;
};


// Create variables regularUser and systemAdmin
const regularUser: UserProfile = {
    id: 1,
    displayName: "john_doe",
    preferredContact: "john_doe",
};

const systemAdmin: AdminProfile = {
    id: 2,
    displayName: "admin",
    preferredContact: 25,
    permissions: "full_access",
};

// Create getContactInfo function
function getContactInfo(contact: ContactMethod): string {
    if (typeof contact === "string") {
        return `Contact: ${contact}`;
    }

    return `Age: ${contact}`;
}

// Print the required outputs
console.log(getContactInfo(regularUser.preferredContact));
console.log(getContactInfo(systemAdmin.preferredContact));
console.log(systemAdmin.permissions);