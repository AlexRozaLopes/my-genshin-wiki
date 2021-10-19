import { SkillTalent } from "./skill-talent";

export interface Champion {
  name: string;
  vision: string;
  weapon: string;
  nation: string;
  affiliation: string;
  rarity: number;
  constellation:string;
  birthday: string;
  description?: string
  skillTalents:Array<SkillTalent>
  passiveTalents:Array<any>
}
