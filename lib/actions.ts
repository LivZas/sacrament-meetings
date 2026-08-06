'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { auth, signIn } from '@/auth';
import { AuthError } from 'next-auth';
import bcrypt from 'bcryptjs';
import { createUser } from './users-db';

import { addMeeting, updateMeeting as updateMeetingInDb, deleteMeeting as deleteMeetingInDb } from "@/lib/meetings-db";

async function requireAuth() {
    const session = await auth();

    if(!session?.user) {
        redirect("/login");
    }

    return session;
}

export async function authenticate(
    prevState: string | undefined,
    formData: FormData
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid email or password.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}


const MeetingFormSchema = z.object({
    date: z.string()
        .min(1, "Date is required."),

    meetingType: z.enum([
        'testimony',
        'regular',
        'stake',
        'general',
        'special'
    ]),

    openingHymnNumber: z.string()
        .optional(),

    openingHymnName: z.string()
        .optional(),

    sacramentHymnNumber: z.string()
        .optional(),

    sacramentHymnName: z.string()
        .optional(),

    closingHymnNumber: z.string()
        .optional(),

    closingHymnName: z.string()
        .optional(),

    speakers: z.string()

        .min(1, "At least one speaker is required."),

    announcements: z.string()
        .optional(),

    wardBusiness: z.string()
        .optional(),

    stakeBusiness: z.boolean(),

    presiding: z.string()
        .min(2, "Presiding name is required."),

    conducting: z.string()
        .min(2, "Conducting name is required."),

    openingPrayer: z.string()
        .min(2, "Opening prayer is required."),

    closingPrayer: z.string()
        .min(2, "Closing prayer is required.")
});

export type State = {
    errors?: {
        date?: string[];
        meetingType?: string[];
        presiding?: string[];
        conducting?: string[];
        openingPrayer?: string[];
        closingPrayer?: string[];
        openingHymnNumber?: string[];
        openingHymnName?: string[];
        sacramentHymnNumber?: string[];
        sacramentHymnName?: string[];
        closingHymnNumber?: string[];
        closingHymnName?: string[];
        speakers?: string[];
        announcements?: string[];
        wardBusiness?: string[];
        stakeBusiness?: string[];
    };

    message?: string | null;
};

export async function registerUser(
    formData: FormData
) {

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!name || !email || !password) {
        return;
    }

    const passwordHash = await bcrypt.hash(
        password,
        10
    );

    await createUser(
        name,
        email,
        passwordHash
    );

    redirect("/login");
}

export async function createMeeting(
    prevState: State,
    formData: FormData
): Promise<State> {
    await requireAuth();
    const raw = {
        date: formData.get("date"),
        meetingType: formData.get("meetingType"),
        presiding: formData.get("presiding"),
        conducting: formData.get("conducting"),
        openingPrayer: formData.get("openingPrayer"),
        closingPrayer: formData.get("closingPrayer"),
        openingHymnNumber: formData.get("openingHymnNumber"),
        openingHymnName: formData.get("openingHymnName"),
        sacramentHymnNumber: formData.get("sacramentHymnNumber"),
        sacramentHymnName: formData.get("sacramentHymnName"),
        closingHymnNumber: formData.get("closingHymnNumber"),
        closingHymnName: formData.get("closingHymnName"),
        speakers: formData.get("speakers"),
        announcements: formData.get("announcements"),
        wardBusiness: formData.get("wardBusiness"),
        stakeBusiness: formData.get("stakeBusiness") === "true"
    };

    const parsed = MeetingFormSchema.safeParse(raw);

    if (!parsed.success) {
        return {
            errors: parsed.error.flatten().fieldErrors,
            message: "Missing or invalid fields."
        };

    }

    try {
        await addMeeting({

            date: parsed.data.date,

            meetingType: parsed.data.meetingType,

            presiding: parsed.data.presiding,

            conducting: parsed.data.conducting,

            openingPrayer: parsed.data.openingPrayer,

            closingPrayer: parsed.data.closingPrayer,

            announcements: parsed.data.announcements ? parsed.data.announcements.split(",").map(item => item.trim()) : [],

            openingHymn: {
                number: Number(parsed.data.openingHymnNumber),
                title: parsed.data.openingHymnName ?? ""
            },

            sacramentHymn: {
                number: Number(parsed.data.sacramentHymnNumber),
                title: parsed.data.sacramentHymnName ?? ""
            },

            closingHymn: {
                number: Number(parsed.data.closingHymnNumber),
                title: parsed.data.closingHymnName ?? ""
            },

            wardBusiness: parsed.data.wardBusiness ? parsed.data.wardBusiness.split(",").map(item => ({ description: item.trim()})) : [],

            stakeBusiness: parsed.data.stakeBusiness,

            speakers: parsed.data.speakers.split(",").map(name => ({name: name.trim(),topic: "",type: "speaker" as const
    })),
});

        revalidatePath("/meetings");

        redirect("/meetings");

    } catch (error) {
        console.error("update meeting error:", error);

        throw error;
    }
}

export async function updateMeeting(
    id: number,
    prevState: State,
    formData: FormData
): Promise<State> {
    await requireAuth();
    const raw = {
        date: formData.get("date"),
        meetingType: formData.get("meetingType"),
        presiding: formData.get("presiding"),
        conducting: formData.get("conducting"),
        openingPrayer: formData.get("openingPrayer"),
        closingPrayer: formData.get("closingPrayer"),
        openingHymnNumber: formData.get("openingHymnNumber"),
        openingHymnName: formData.get("openingHymnName"),
        sacramentHymnNumber: formData.get("sacramentHymnNumber"),
        sacramentHymnName: formData.get("sacramentHymnName"),
        closingHymnNumber: formData.get("closingHymnNumber"),
        closingHymnName: formData.get("closingHymnName"),
        speakers: formData.get("speakers"),
        announcements: formData.get("announcements"),
        wardBusiness: formData.get("wardBusiness"),
        stakeBusiness: formData.get("stakeBusiness") === "true"
    };

    const parsed = MeetingFormSchema.safeParse(raw);
    
    if (!parsed.success) {
        
        return {
            errors: parsed.error.flatten().fieldErrors,
            message: "Missing or invalid fields."
        };
}

try {
    await updateMeetingInDb(id, {
        date: parsed.data.date,

        meetingType: parsed.data.meetingType,

        presiding: parsed.data.presiding,

        conducting: parsed.data.conducting,

        openingPrayer: parsed.data.openingPrayer,

        closingPrayer: parsed.data.closingPrayer,

        announcements: parsed.data.announcements
            ? parsed.data.announcements
                  .split(",")
                  .map(item => item.trim())
            : [],

        openingHymn: {
            number: Number(parsed.data.openingHymnNumber),
            title: parsed.data.openingHymnName ?? ""
        },

        sacramentHymn: {
            number: Number(parsed.data.sacramentHymnNumber),
            title: parsed.data.sacramentHymnName ?? ""
        },

        closingHymn: {
            number: Number(parsed.data.closingHymnNumber),
            title: parsed.data.closingHymnName ?? ""
        },

        wardBusiness: parsed.data.wardBusiness
            ? parsed.data.wardBusiness
                  .split(",")
                  .map(item => ({
                      description: item.trim()
                  }))
            : [],

        stakeBusiness: parsed.data.stakeBusiness,

        speakers: parsed.data.speakers
            .split(",")
            .map(name => ({
                name: name.trim(),
                topic: "",
                type: "speaker" as const
            }))
    });

    revalidatePath("/meetings");

    redirect("/meetings");

} catch (error) {
    console.error("update meeting error:", error);

    throw error;
}

}

export async function deleteMeeting(formData: FormData): Promise<void> {
    await requireAuth();
    const id = Number(formData.get("id"));

    try {
        await deleteMeetingInDb(id);
        revalidatePath("/meetings");

    } catch (error) {
        console.error("Delete meeting error:", error);

        throw new Error("Could not delete meeting");
    }

    redirect("/meetings");
}