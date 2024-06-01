"use client";

export default function Error({ error }: { error: Error }) {
  return "Erro ocorrido ao tentar acessar áreas analisadas: " + error;
}
