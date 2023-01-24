export type Character = "Niki" | "LunLun" | "Lucy" | "Shua" | "Dhanpir" | "Pochi" | "Al";

function isOfTypeCharacter(str: string): str is Character {
    return ["Niki", "LunLun", "Lucy", "Shua", "Dhanpir", "Pochi", "Al"].includes(str);
}

export type Part = "Hat" | "Hair" | "Dye" | "Upper" | "Lower" | "Shoes" | "Socks" | "Hand" | "Backpack" | "Face" | "Racket";

export class Item {
    name_kr: string = "";
    name_en: string = "";
    useType: string = "";
    maxUse: number = 0;
    hidden: boolean = false;
    resist: string = "";
    character: Character = "Niki";
    part: Part = "Hat";
    level: number = 0;
    str: number = 0;
    sta: number = 0;
    dex: number = 0;
    wil: number = 0;
    hp: number = 0;
    quickslots: number = 0;
    buffslots: number = 0;
    smash: number = 0;
    movement: number = 0;
    charge: number = 0;
    lob: number = 0;
    serve: number = 0;
    max_str: number = 0;
    max_sta: number = 0;
    max_dex: number = 0;
    max_wil: number = 0;
    element_enchantable: boolean = false;
    parcel_enabled: boolean = false;
    spin: number = 0;
    atss: number = 0;
    dfss: number = 0;
    socket: number = 0;
    gauge: number = 0;
    gauge_battle: number = 0;
}

let items: Item[] = [];

function parseData(data: string): Item[] {
    const items: Item[] = [];
    for (const [, result] of data.matchAll(/\<Item (.*)\\\>/g)) {
        const item: Item = new Item;
        for (const [, attribute, value] of result.matchAll(/([^=]*)="([^"]*)"/g)) {
            switch (attribute) {
                case "Index":
                    break;
                case "_Name_":
                    item.name_kr = value;
                    break;
                case "Name_N":
                    item.name_en = value;
                    break;
                case "UseType":
                    item.useType = value;
                    break;
                case "MaxUse":
                    item.maxUse = parseInt(value);
                    break;
                case "Hide":
                    item.hidden = !!parseInt(value);
                    break;
                case "Resist":
                    item.resist = value;
                    break;
                case "Char":
                    if (isOfTypeCharacter(value)) {
                        item.character = value;
                    }
                    else {
                        console.error(`Found unknown character ${value}`);
                    }
                    break;
                case "Part":
                    switch (value) {
                        case "BAG":
                            item.part = "Backpack";
                            break;
                        case "GLASSES":
                            item.part = "Face";
                            break;
                        case "HAND":
                            item.part = "Hand";
                            break;
                        case "SOCKS":
                            item.part = "Socks";
                            break;
                        case "FOOT":
                            item.part = "Shoes";
                            break;
                        case "CAP":
                            item.part = "Hat";
                            break;
                        case "PANTS":
                            item.part = "Lower";
                            break;
                        case "RACKET":
                            item.part = "Racket";
                            break;
                        case "BODY":
                            item.part = "Upper";
                            break;
                        case "HAIR":
                            item.part = "Hair";
                            break;
                        case "DYE":
                            item.part = "Dye";
                            break;
                        default:
                            console.error(`Found unknown part ${value}`);
                    }
                    break;
                case "Level":
                    item.level = parseInt(value);
                    break;
                case "STR":
                    item.str = parseInt(value);
                    break;
                case "STA":
                    item.sta = parseInt(value);
                    break;
                case "DEX":
                    item.dex = parseInt(value);
                    break;
                case "WIL":
                    item.wil = parseInt(value);
                    break;
                case "AddHP":
                    item.hp = parseInt(value);
                    break;
                case "AddQuick":
                    item.quickslots = parseInt(value);
                    break;
                case "AddBuff":
                    item.buffslots = parseInt(value);
                    break;
                case "SmashSpeed":
                    item.smash = parseInt(value);
                    break;
                case "MoveSpeed":
                    item.movement = parseInt(value);
                    break;
                case "ChargeshotSpeed":
                    item.charge = parseInt(value);
                    break;
                case "LobSpeed":
                    item.lob = parseInt(value);
                    break;
                case "ServeSpeed":
                    item.serve = parseInt(value);
                    break;
                case "MAX_STR":
                    item.str = parseInt(value);
                    break;
                case "MAX_STA":
                    item.sta = parseInt(value);
                    break;
                case "MAX_DEX":
                    item.dex = parseInt(value);
                    break;
                case "MAX_WIL":
                    item.wil = parseInt(value);
                    break;
                case "EnchantElement":
                    item.element_enchantable = !!parseInt(value);
                    break;
                case "EnableParcel":
                    item.parcel_enabled = !!parseInt(value);
                    break;
                case "BallSpin":
                    item.spin = parseInt(value);
                    break;
                case "ATSS":
                    item.atss = parseInt(value);
                    break;
                case "DFSS":
                    item.dfss = parseInt(value);
                    break;
                case "Socket":
                    item.socket = parseInt(value);
                    break;
                case "Gauge":
                    item.gauge = parseInt(value);
                    break;
                case "GaugeBattle":
                    item.gauge_battle = parseInt(value);
                    break;
                default:
                    console.error(`Found unknown item attribute ${attribute}`);
            }
        }
        items.push(item);
    }
    return items;
}

export async function downloadItems() {
    const url = "https://raw.githubusercontent.com/sstokic-tgm/JFTSE/master/auth-server/src/main/resources/res/Item_Parts_Ini3.xml";
    const reply = await fetch(url);
    if (!reply.ok) {
        alert(`Failed downloading item data from ${"https://raw.githubusercontent.com/sstokic-tgm/JFTSE/master/auth-server/src/main/resources/res/Item_Parts_Ini3.xml"}`);
    }
    const data = await reply.text();
    items = parseData(data);
}
