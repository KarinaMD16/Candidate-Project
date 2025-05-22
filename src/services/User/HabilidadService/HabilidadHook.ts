// src/hooks/useHabilidades.ts
//import { useState, useEffect } from "react";
//import { useQuery } from "@tanstack/react-query";
//import type { Habilidad } from "../../../models/User/Habilidad";
//import { gethabilidades } from "../ProfileService/ProfileService";
import { useEffect, useState } from "react";
import axiosPrivate from "../../../api/apiAuth";
/*
export function useHabilidades() {
  const { data: habilidades, isLoading: loading, error } = useQuery<Habilidad[]>({
    queryKey: ['habilidades'],
    queryFn: gethabilidades,
  });

  return { habilidades, loading, error };
}
*/






export interface Habilidad {
  id: number;
  nombre: string;
}

export function useHabilidades() {
  const [habilidades, setHabilidades] = useState<Habilidad[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHabilidades = async () => {
      try {
        setLoading(true);
        const response = await axiosPrivate.get<Habilidad[]>("/habilidad");
        setHabilidades(response.data);
      } catch (err) {
        setError("Error al cargar habilidades");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchHabilidades();
  }, []);

  return { habilidades, loading, error };
}
