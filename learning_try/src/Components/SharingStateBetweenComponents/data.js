export function filterItems(items, query){
    query = query.toLowerCase();
    const result = items.filter(item=>item.name.split(' ').some(word=> word.toLowerCase().startsWith(query)))
    return result;
};

export const data = [
    {
        id: 1,
        name: "Alishan",
        desc: "Alish  will be hero only if he continue to study.",
    }, {
        id: 2,
        name: "Shreejan",
        desc: "Shreejan always rocks at self study assessments.",
    }, {
        id: 3,
        name: "Bishal",
        desc: "I do like study but i must quit being lazy",
    }, {
        id: 4,
        name: "Nishant",
        desc: "Machikni khaatey kukur",
    }
];