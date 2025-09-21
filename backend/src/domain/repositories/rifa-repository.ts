import { Rifa } from "../entities/rifa";

export interface RifaRepository {
  save(rifa: Rifa): Promise<Rifa>;
  list(): Promise<Rifa[]>;
}
