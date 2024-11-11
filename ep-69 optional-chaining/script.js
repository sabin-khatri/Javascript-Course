const user = {
    name: "Sabin",
    Address: {
        city:"biratnagar",
        // zip: "44600"
    }
};
const city = user.Address?.city;
const zip = user.Address?.zip;
const outputElement = document.getElementById("output");
outputElement.innerText = `City: ${city || "अवस्थित छैन"}\nZIP: ${zip || "अवस्थित छैन"}`;