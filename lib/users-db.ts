import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL!);

export async function getUserByEmail(
    email: string
) {

    const rows = await sql`
    SELECT
    id,
    name,
    email,
    password_hash as "passwordHash",
    role
    FROM users
    WHERE email = ${email}
    `;

    return rows[0] ?? null;
}

export async function createUser(
    name: string,
    email: string,
    passwordHash: string
) {

    const rows = await sql`
    INSERT INTO users
    (
    name,
    email,
    password_hash
    )
    VALUES
    (
    ${name},
    ${email},
    ${passwordHash}
    )
    RETURNING
    id,
    name,
    email,
    role
    `;

    return rows[0];
}