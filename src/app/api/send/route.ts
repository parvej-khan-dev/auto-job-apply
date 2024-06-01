import connectDB from '@/lib/database';
import { sendEmail } from '@/lib/resend';

export async function POST() {
  try {
    await connectDB();
    const email = await sendEmail(['parvej-dev@proton.me'], {
      firstName: 'Parvej khan',
    });
    return Response.json({ data: email });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
